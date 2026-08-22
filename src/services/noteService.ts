import axios from "axios";
import type { Note, NewNote } from "../types/note";

const noteService = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const fetchNotes = async ({
  page,
  perPage,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await noteService.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage,
      ...(search ? { search } : {}),
    },
  });

  return response.data;
};

interface CreateNoteResponse {
  note: Note;
}

const createNote = async (newNote: NewNote): Promise<CreateNoteResponse> => {
  const response = await noteService.post<CreateNoteResponse>(
    "/notes",
    newNote
  );

  return response.data;
};

const deleteNote = async (id: string): Promise<Note> => {
  const response = await noteService.delete<Note>(`/notes/${id}`);

  return response.data;
};

export default {
  fetchNotes,
  createNote,
  deleteNote,
};

import { useQuery } from "@tanstack/react-query";
import noteService from "../../services/noteService";

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      noteService.fetchNotes({
        page: 1,
        perPage: 12,
      }),
  });

  console.log(data);
  console.log(isLoading);
  console.log(isError);

  return <div>NoteHub</div>;
};

export default App;

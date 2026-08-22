NoteHub
A notes management app: fetching, creating, deleting, searching, and paginating a personal collection of notes backed by a REST API.

Repository: https://github.com/Olena3333/05-notehub
Live demo: https://05-notehub-da8r.vercel.app
Features
Fetch and display a paginated list of notes
Search notes by keyword (debounced)
Create a note via a validated form
Delete a note
Loading and error states for all requests
Tech stack
Vite + React + TypeScript
TanStack Query — server state, caching, and cache invalidation
Axios — HTTP requests
Formik + Yup — form state and validation
React Paginate — pagination controls
use-debounce — debounced search input
CSS Modules + modern-normalize
Getting started
npm install
Create a .env file in the project root with your personal NoteHub API token:

VITE_NOTEHUB_TOKEN=your_token_here
Get a token from the NoteHub API docs (tied to your email). A fresh token comes pre-seeded with 40 sample notes.

npm run dev # start the dev server
npm run build # type-check and build for production
npm run lint # run ESLint
npm run format # format with Prettier
Deployment
Deployed on Vercel. The VITE_NOTEHUB_TOKEN environment variable must be configured in the Vercel project settings, since .env is not committed to the repository.

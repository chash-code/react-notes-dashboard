import { NotesProvider } from "./NotesContext";
import AddNote from "./AddNote";
import NotesList from "./NotesList";

export default function App() {
  return (
    <NotesProvider>
      <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
        <h1>Notes Dashboard</h1>
        <AddNote />
        <NotesList />
      </div>
    </NotesProvider>
  );
}

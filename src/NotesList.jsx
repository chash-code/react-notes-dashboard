import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export default function NotesList() {
  const { notes, selectedNote, setSelectedNote, totalNotes } = useContext(NotesContext);

  return (
    <div>
      <h3>Total Notes: {totalNotes}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => setSelectedNote(note.id)}
            style={{
              padding: "10px",
              margin: "5px 0",
              cursor: "pointer",
              backgroundColor: selectedNote === note.id ? "yellow" : "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

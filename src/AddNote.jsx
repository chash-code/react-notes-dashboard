import { useState, useRef, useEffect, useContext } from "react";
import { NotesContext } from "./NotesContext";

export default function AddNote() {
  const [input, setInput] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    addNote(input);
    setInput("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a new note..."
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}

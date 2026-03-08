import { createContext, useState, useEffect, useMemo } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const totalNotes = useMemo(() => notes.length, [notes]);

  const addNote = (text) => {
    if (text.trim() === "") return;
    setNotes((prev) => [...prev, { id: Date.now(), text }]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, selectedNote, setSelectedNote, totalNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

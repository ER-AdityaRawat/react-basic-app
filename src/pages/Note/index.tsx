import React from "react";
import { useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}
const Note: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");
  const onaddNote = () => {
    addNote(note);
    setNote("");
  };

  console.log(note, "note");
  return (
    <div>
      <input
        type="text"
        placeholder="note"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNote(e.target.value)
        }
        value={note}
      />
      <button onClick={onaddNote}>Add note</button>
    </div>
  );
};

export default Note;

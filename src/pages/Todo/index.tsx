import { useDispatch, useSelector } from "react-redux";
import { NotesState } from "../../redux/reducer";
import Note from "../Note";
import "./style.css";

const Todo = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };
  return (
    <div className="todo">
      <Note addNote={addNote} />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;

import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addTodoAction } from "../store/todoActions";

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  const input = useRef(null);

  const handlesubmit = (event) => {
    event.preventDefault();
    dispatch(addTodoAction(input.current.value));
    input.current.value = "";
    input.current.focus();
  };
  return (
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder="Tâche" ref={input} />
      <button>Ajouter</button>
    </form>
  );
};

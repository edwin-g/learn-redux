import { wait } from "@testing-library/react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todoActions";

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  const input = useRef(null);

  const [loading, setLoading] = useState(false);

  const handlesubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // The dispatch is asynchronous because the return of addTodoAction is asynchronous because of wait()
    await dispatch(addTodoAction(input.current.value));
    setLoading(false);
    input.current.value = "";
    input.current.focus();
  };
  return (
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder="Tâche" ref={input} />
      <button disabled={loading}>Ajouter</button>
      {loading && "Chargement..."}
    </form>
  );
};

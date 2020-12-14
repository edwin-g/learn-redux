import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../store/todoActions";
import { todoSelector } from "../store/todoSelectors";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title} <button onClick={() => onDelete(todo)}>x</button>
      </label>
    </li>
  );
}

export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

export function TodoListStore() {
  const todos = useSelector(todoSelector);

  const dispatch = useDispatch();

  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );

  const onDelete = useCallback(
    (todo) => {
      dispatch(deleteTodoAction(todo));
    },
    [dispatch]
  );

  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
}

// By using todoSelector() & toggleTodoAction() functions, i can export the logic
// and making change easly if it's in several component.
// export const TodoListStore = connect(
//   (state) => ({
//     todos: todoSelector(state),
//   }),
//   (dispatch) => ({
//     onToggle: (todo) => dispatch(toggleTodoAction(todo)),
//   })
// )(TodoList);

import { connect } from "react-redux";
import { UPDATE_TODO_ACTION } from "../store/todoReducer";

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)} // 1. onToggle is triggered when modification on the checkbox
        />
        {todo.title}
      </label>
    </li>
  );
}

export function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />
      ))}
    </ul>
  );
}

export const TodoListStore = connect(
  (state) => ({
    todos: state.todos,
  }),
  (dispatch) => ({
    // 2. Giving to TodoList as a props the onToggle dispatch
    onToggle: (todo) =>
      dispatch({
        type: UPDATE_TODO_ACTION,
        payload: { ...todo, completed: !todo.completed },
      }),
  })
)(TodoList);

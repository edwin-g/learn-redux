import { connect } from "react-redux";
import { toggleTodoAction } from "../store/todoActions";
import { todoSelector } from "../store/todoSelectors";

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
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

// By using todoSelector() & toggleTodoAction() functions, i can export the logic
// and making change easly if it's in several component.
export const TodoListStore = connect(
  (state) => ({
    todos: todoSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  })
)(TodoList);

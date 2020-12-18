import { createSelector } from "reselect";
import { filterSelector } from "./filterSelectors";

export const todoSelector = ({ todos }) => todos;

/**
 * Redux, Memoization with Reselect :
 * Problem : if i have a function that goes off every second in the store
 * the todoList cpnt going to be re-render because of "return todos.filter((todo) => todo.completed === filter);"
 * Redux going to think that the component is different but it's not.
 * Solution : By using 'Reselect' The function is call only if todoSelector or filterSelector has changed.
 */
export const filteredTodosSelectors = createSelector(
  todoSelector,
  filterSelector,
  (todos, filter) => {
    if (filter === null) {
      return todos;
    }
    return todos.filter((todo) => todo.completed === filter);
  }
);

// export const filteredTodosSelectors = ({ todos, filter }) => {
//   if (filter === null) {
//     return todos;
//   }
//   return todos.filter((todo) => todo.completed === filter);
// };

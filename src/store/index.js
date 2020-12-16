import { createStore, combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { ToDoReducer } from "./todoReducer";

export default createStore(
  combineReducers({
    todos: ToDoReducer,
    filter: filterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import { createStore, combineReducers } from "redux";
import { ToDoReducer } from "./todoReducer";

export default createStore(
  combineReducers({
    todos: ToDoReducer,
    filter: (state = [], action) => state,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

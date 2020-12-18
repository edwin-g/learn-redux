import { createStore, combineReducers, applyMiddleware } from "redux";
import { filterReducer } from "./filterReducer";
import { ToDoReducer } from "./todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    todos: ToDoReducer,
    filter: filterReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

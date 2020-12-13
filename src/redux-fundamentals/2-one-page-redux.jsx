/* -------------------------------------------------------------------------- */
/*                              2. One page redux                             */
/* -------------------------------------------------------------------------- */

import { createStore, combineReducers } from "redux";

let id = 0;

const initialState = [
  {
    id: id++,
    title: "Save the tutorial",
    completed: false,
  },
  {
    id: id++,
    title: "Prepare the tutorial",
    completed: true,
  },
];

const ADD_TODO_ACTION = "ADD_TODO_ACTION";

/**
 * @param {array} state
 * @param {object} action
 */
function ToDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: id++, completed: false, ...action.payload }];
    default:
      return state;
  }
}

/* --------------------------- Creation of a store -------------------------- */

const store = createStore(
  combineReducers({
    todos: ToDoReducer,
    filter: (state = [], action) => state,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

const action = {
  type: ADD_TODO_ACTION,
  payload: { title: "Demo" },
};

store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);

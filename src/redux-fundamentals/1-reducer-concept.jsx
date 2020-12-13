/* -------------------------------------------------------------------------- */
/*                            1. Concept of reducer                           */
/* -------------------------------------------------------------------------- */

// A reducer is a function which takes as parameters a state and an action
// and depending on this action the reducer will change state.
// ex: const reducer = (state, action) => newState;

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

const state = ToDoReducer(undefined, {});

// Display the initial state
console.log({ state });

const action = {
  type: ADD_TODO_ACTION,
  payload: { title: "Demo" },
};

const newState = ToDoReducer(state, action);

// Display the new state after the action of the reducer
console.log({ newState });

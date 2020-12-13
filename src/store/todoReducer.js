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

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";

/**
 * @param {array} state
 * @param {object} action
 */
export function ToDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: id++, completed: false, ...action.payload }];
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

const INITIAL_STATE = {
  currentUser: null,
};
// If state is not set, fall back to initial state as defaut
// Reducer takes it 2 parameters -- the currentState, and action
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

// We are exporting the an opbject is a property of currentUser
/**
 * {
 *  currentUser: { ... }
 * }
 */
export default userReducer;

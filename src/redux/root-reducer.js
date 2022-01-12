import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer, // Object from which we set it's state
});

/**
 * state {
 *  user: {
 *    currentUser: {
 *    }
 *  }
 * }
 */

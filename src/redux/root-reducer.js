import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer, // Object from which we set it's state - the return from userReducer is currentUser
  cart: cartReducer,
});

/**
 * state {
 *  user: {
 *    currentUser: {
 *    }
 *  }
 * }
 */

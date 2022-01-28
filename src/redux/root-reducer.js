/**
 * Redux Persist adds store features that retain after page refresh
 * Storage lib sets the store to utilize localStorage
 * localStorage stringify's state object provided by the whitelist config
 * To get the localStorage string, the library converts string back to json
 * JSON.stringify() will wrap the object in a string
 * JSON.parse() will take that string and turn it to an object
 *
 * Config files
 * store.js
 * root-reducer.js
 * index.js (entry point)
 */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

/**
 * Persist Config
 * key prop 'root' means start at the root of the object
 * storage is what type we want to persist store with, which is local storage/ storage lib from redux-persist
 * whitelist is an array of state/reducers we want to persist -- aka user will not be needed, because firebase handles that
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
/**
 *
 */
const rootReducer = combineReducers({
  user: userReducer, // Object from which we set it's state - the return from userReducer is currentUser
  cart: cartReducer,
});

// persistReducer takes a config object for instructions
// Then it passes the combinedReducers to copy the whatever state is whitelisted from the config
export default persistReducer(persistConfig, rootReducer);

/**
 * state {
 *  user: {
 *    currentUser: {
 *    }
 *  }
 *  cart: {
 *    cartItems: []
 *  }
 * }
 */

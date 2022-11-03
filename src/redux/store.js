/**
 * Redux Persist
 * Import persistStore module to store redux state in local storage
 * We export both regular stock and persistor store as an export default
 * just testing discord hook
 */

/**
 * Config files for react-persist
 * store.js
 * root-reducer.js
 * index.js (entry point)
 */

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

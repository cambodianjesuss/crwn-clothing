import { UserActionTypes } from "./user.types";

// Action to used for dispatch in component when we need to tell the reducer to update the store
// The store applies it on 'user'

// Each action we can add any particular string to the type, so our reducer can see what the action is
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

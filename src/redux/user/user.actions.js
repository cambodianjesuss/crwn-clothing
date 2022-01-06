// Action to used for dispatch in component when we need to tell the reducer to update the store
// The store applies it on 'user'
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

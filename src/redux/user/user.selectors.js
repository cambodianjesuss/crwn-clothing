import { createSelector } from "reselect";

const userSelctor = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userSelctor],
  (user) => user.currentUser,
);

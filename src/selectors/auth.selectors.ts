import { createSelector } from "reselect";
import { AppState } from "../store";
import { userByIdSelector } from "./users.selectors";

export const authStateSelector = (state: AppState) => state.auth;

export const authIdSelector = createSelector(
  [authStateSelector],
  (state) => state.id
);

export const authErrorSelector = createSelector(
  [authStateSelector],
  (state) => state.error
);

export const meSelector = createSelector(
  [userByIdSelector, authIdSelector],
  (byId, id) => byId[id!]
);

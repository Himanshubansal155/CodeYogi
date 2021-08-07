import { createSelector } from "reselect";
import { AppState } from "../store";

export const userStateSelector = (state: AppState) => state.users;

export const userByIdSelector = createSelector(
  [userStateSelector],
  (state) => state.byId
);

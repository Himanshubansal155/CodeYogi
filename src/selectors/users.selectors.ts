import { createSelector } from "reselect";
import { AppState } from "../store";

export const userStateSelector = (state: AppState) => state.users;

export const userByIdSelector = createSelector(
  [userStateSelector],
  (state) => state.byId
);

export const userIdsSelector = createSelector([userStateSelector], state => state.userIds);

export const userLoadingStateSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loading
);

export const userSelector = createSelector(
  [userByIdSelector, userIdsSelector],
  (byId, userIds) => {
    const groups = userIds!.map((id) => byId[id]);
    return groups;
  }
);

export const userFetchedSelector = createSelector(
  [userStateSelector],
  (state) => state.user
);
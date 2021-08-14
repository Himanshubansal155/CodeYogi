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
  (userState) => userState.loadingList
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


export const userSelectedIdSelector = createSelector(
  [userStateSelector],
  (state) => state.selectedId
);

export const selectedUserSelector = createSelector(
  [userByIdSelector, userSelectedIdSelector],
  (byId, id) => id && byId[id]
);

export const userSelectedErrorSelector = createSelector(
  [userStateSelector],
  (state) => state.errorOne
);

export const userLoadingOneSelector = createSelector(
  [userStateSelector],
  (state) => state.loadingOne
);
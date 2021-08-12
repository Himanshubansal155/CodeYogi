import { createSelector } from "reselect";
import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (state) => state.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (state) => state.queryMap
);

export const groupQueryByIdSelector = createSelector(
  [groupStateSelector],
  (state) => state.byId
);

export const groupFetchedSelector = createSelector(
  [groupStateSelector],
  (state) => state.group
);

export const groupSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupQueryByIdSelector],
  (query, queryMap, byId) => {
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);
export const groupQueryLoadingSelector = createSelector(
  [groupStateSelector],
  (state) => state.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupQueryLoadingSelector],
  (query, loadingMap) => loadingMap[query]
);

export const groupLoadingStateSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loading
);

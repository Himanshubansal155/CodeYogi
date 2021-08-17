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

export const groupSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupQueryByIdSelector],
  (query, queryMap, byId) => {
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);
export const groupLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

export const groupLoadingOneSelector = createSelector(
  [groupStateSelector],
  (state) => state.loadingOne
);

export const groupSelectedIdSelector = createSelector(
  [groupStateSelector],
  (state) => state.selectedId
);

export const selectedGroupSelector = createSelector(
  [groupQueryByIdSelector, groupSelectedIdSelector],
  (byId, id) => (id === undefined ? undefined : byId[id])
);

export const groupSelectedErrorSelector = createSelector(
  [groupStateSelector],
  (state) => state.errorOne
);

export const groupCreatorsSelector = createSelector(
  [groupStateSelector],
  (state) => state.creators
);

export const groupParticipantsSelector = createSelector(
  [groupStateSelector],
  (state) => state.participants
);

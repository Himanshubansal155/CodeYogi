import { createSelector } from "reselect";
import { AppState } from "../store";
import { userByIdSelector } from "./users.selectors";

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
  [groupQueryByIdSelector, groupSelectedIdSelector, userByIdSelector],
  (byId, id, userById) => {
    if (!id) {
      return undefined;
    }
    const group = byId[id];
    if (group) {
      const creator = userById[group.creator as any];
      const participants = group.participants.map((participant: any) => userById[participant]);
      const invitedMembers = group.invitedMembers.map((member:any) => userById[member]);
      return {...group, creator, participants, invitedMembers};
    }

    return undefined;
  }
);

export const groupSelectedErrorSelector = createSelector(
  [groupStateSelector],
  (state) => state.errorOne
);

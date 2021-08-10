import axios, { Canceler } from "axios";
import { groupActions } from "../actions/group.actions";
import { fetchGroups as fetchGroupAPI, GroupRequest } from "../api/groups";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

let canceler: Canceler | undefined;

export const fetchGroups = (data: GroupRequest) => {
  const queryMap = groupQueryMapSelector(store.getState());
  const groupIds = queryMap[data.query];
  groupActions.groupQueryAction(data.query, !groupIds);
  if (groupIds) {
    return;
  }
  fetchGroupAPI(data).then((groups) => {
    groupActions.groupQueryCompleted(data.query, groups);
  });
};

export const fetchLoadingGroups = (data: GroupRequest) => {
  canceler && canceler();
  groupActions.groupQueryAction(data.query, true);

  const tokenSource = axios.CancelToken.source();
  canceler = tokenSource.cancel;
  fetchGroupAPI(data, tokenSource).then((groups) => {
    groupActions.groupQueryCompleted(data.query, groups);
    canceler = undefined;
  });
};

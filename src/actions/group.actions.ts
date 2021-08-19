import {
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETE,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
  GROUP_FETCH_ERROR,
} from "./actions.constants";

export const groupChangedAction = (query: string) => ({
  type: GROUP_QUERY_CHANGED,
  payload: query,
});
export const groupQueryCompleted = (query: string, groups: any) => ({
  type: GROUP_QUERY_COMPLETED,
  payload: { query, groups },
});

export const groupFetchCompleted = (group: any) => ({
  type: GROUP_FETCH_ONE_COMPLETE,
  payload: group,
});

export const groupFetchOne = (selectedId: number) => ({
  type: GROUP_FETCH_ONE,
  payload: selectedId,
});

export const groupFetchError = (id: number, message: string) => ({
  type: GROUP_FETCH_ERROR,
  payload: { id, message },
});

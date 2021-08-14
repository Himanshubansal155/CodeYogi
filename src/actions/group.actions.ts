import { Group } from "../models/Group";
import {
  GROUP_FETCH_ONE,
  GROUP_FETCH_COMPLETED,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
} from "./actions.constants";

export const groupChangedAction = (query: string) => ({
  type: GROUP_QUERY_CHANGED,
  payload: query,
});
export const groupQueryCompleted = (query: string, groups: Group[]) => ({
  type: GROUP_QUERY_COMPLETED,
  payload: { query, groups },
});

export const groupFetchCompleted = (group: Group) => ({
  type: GROUP_FETCH_COMPLETED,
  payload: group,
});

export const groupFetchOne = (selectedId: number) => ({
  type: GROUP_FETCH_ONE,
  payload: selectedId,
});

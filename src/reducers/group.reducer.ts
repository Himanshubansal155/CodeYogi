import { Reducer } from "redux";
import {
  GROUP_FETCH_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
} from "../actions/actions.constants";
import { addMany, EntityState, getIds } from "../models/Entity";
import { Group } from "../models/Group";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loadingQuery: { [query: string]: boolean };
  loading: boolean;
  group?: Group;
  selectedId?: number;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loadingQuery: {},
  loading: false,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY_CHANGED:
      return {
        ...state,
        query: action.payload,
        loadingQuery: { [action.payload]: true },
        loading: true,
      };
    case GROUP_QUERY_COMPLETED:
      const groupIds = getIds(action.payload.groups);
      const newState = addMany(state, action.payload.groups) as GroupState;
      return {
        ...newState,
        queryMap: { ...state.queryMap, [action.payload.query]: groupIds },
        loadingQuery: {
          ...newState.loadingQuery,
          [action.payload.query]: false,
        },
        loading: false,
      };
    case GROUP_FETCH_ONE:
      return { ...state, selectedId: action.payload };
    case GROUP_FETCH_COMPLETED:
      return { ...state, group: action.payload };
    default:
      return state;
  }
};

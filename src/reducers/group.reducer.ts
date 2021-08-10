import { Reducer } from "redux";
import {
  GROUP_QUERY,
  GROUP_QUERY_COMPLETED,
  SELECTED_ID_QUERY,
} from "../actions/actions.constants";
import { addMany, EntityState, getIds } from "../models/Entity";
import { Group } from "../models/Group";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  selected?: number;
  loadingQuery: { [query: string]: boolean };
  loading: boolean;
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
    case GROUP_QUERY:
      return {
        ...state,
        query: action.payload.query,
        loadingQuery: { [action.payload.query]: action.payload.loading },
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
    case SELECTED_ID_QUERY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

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
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      return { ...state, query: action.payload };
    case GROUP_QUERY_COMPLETED:
      const groupIds = getIds(action.payload.groups);
      const newState = addMany(state, action.payload.groups) as GroupState;
      return {
        ...newState,
        queryMap: { ...state.queryMap, [action.payload.query]: groupIds },
      };
    case SELECTED_ID_QUERY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

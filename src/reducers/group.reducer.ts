import { Reducer } from "redux";
import {
  GROUP_FETCH_COMPLETED,
  GROUP_FETCH_ERROR,
  GROUP_FETCH_ONE,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
} from "../actions/actions.constants";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
  select,
  setErrorForOne,
} from "../models/Entity";
import { Group } from "../models/Group";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
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
        loadingList: true,
      };
    case GROUP_QUERY_COMPLETED:
      const groupIds = getIds(action.payload.groups);
      const newState = addMany(state, action.payload.groups) as GroupState;
      return {
        ...newState,
        queryMap: { ...state.queryMap, [action.payload.query]: groupIds },
        loadingList: false,
      };
    case GROUP_FETCH_ONE:
      return select(state, action.payload) as GroupState;
    case GROUP_FETCH_COMPLETED:
      return { ...(addOne(state, action.payload, false) as GroupState) };
    case GROUP_FETCH_ERROR:
      const { id, message } = action.payload;

      return setErrorForOne(state, id, message) as GroupState;
    default:
      return state;
  }
};

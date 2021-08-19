import { Reducer } from "redux";
import {
  GROUP_FETCH_ONE_COMPLETE,
  GROUP_FETCH_ERROR,
  GROUP_FETCH_ONE,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
} from "../actions/actions.constants";
import {
  EntityState,
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
  creators: {},
  participants: {},
  invitedMembers: {},
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
      const groups = action.payload.groups;
      const toNumbers = (arr: any[]) => arr.map(Number);
      const groupIds = toNumbers(Object.keys(groups));
      return {
        ...state,
        byId: groups,
        loadingList: false,
        queryMap: { ...state.queryMap, [action.payload.query]: groupIds },
      };
    case GROUP_FETCH_ONE:
      return select(state, action.payload) as GroupState;
    case GROUP_FETCH_ONE_COMPLETE:
      const group = action.payload;
      return {
        ...state,
        byId: group,
        loadingOne: false,
      };
    case GROUP_FETCH_ERROR:
      const { id, message } = action.payload;

      return setErrorForOne(state, id, message) as GroupState;
    default:
      return state;
  }
};

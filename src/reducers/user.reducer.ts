import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USER_FETCH_COMPLETED,
  USER_FETCH_ONE,
  USER_QUERY,
  USER_QUERY_COMPLETED,
} from "../actions/actions.constants";
import { addMany, addOne, EntityState, getIds } from "../models/Entity";
import { User } from "../models/User";

export interface UserState extends EntityState<User> {
  loading?: boolean;
  userIds?: number[];
  user?: User;
  selectedId?: number;
}

const initialState = {
  byId: {},
  userIds: [],
  loading: false,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return addOne(state, action.payload) as UserState;
    case USER_QUERY:
      return { ...state, loading: true };
    case USER_QUERY_COMPLETED:
      const userIds = getIds(action.payload);
      const newState = addMany(state, action.payload) as UserState;
      return {
        ...newState,
        userIds: userIds,
        loading: false,
      };

    case USER_FETCH_ONE:
      return { ...state, selectedId: action.payload };
    case USER_FETCH_COMPLETED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

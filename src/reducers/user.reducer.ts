import { Reducer } from "redux";
import {
  ME_FETCH_COMPLETED,
  ME_LOGIN_COMPLETED,
  USER_FETCH_ONE_COMPLETE,
  USER_FETCH_ERROR,
  USER_FETCH_ONE,
  USER_QUERY,
  USER_QUERY_COMPLETED,
} from "../actions/actions.constants";
import {
  addOne,
  EntityState,
  initialEntityState,
  select,
  setErrorForOne,
} from "../models/Entity";
import { User } from "../models/User";

export interface UserState extends EntityState<User> {
  userIds?: number[];
  user?: User;
}

const initialState = {
  ...initialEntityState,
  userIds: [],
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH_COMPLETED:
    case ME_LOGIN_COMPLETED:
      return addOne(state, action.payload) as UserState;
    case USER_QUERY:
      return { ...state, loadingList: true };
    case USER_QUERY_COMPLETED:
      const dataUsers = action.payload;
      const toNumbers = (arr: any[]) => arr.map(Number);
      let userIds = toNumbers(Object.keys(dataUsers));
      return {
        ...state,
        userIds: userIds,
        byId: { ...state.byId, ...dataUsers },
        loadingList: false,
      };

    case USER_FETCH_ONE:
      return select(state, action.payload) as UserState;

    case USER_FETCH_ONE_COMPLETE:
      const data = action.payload;
      return {
        ...state,
        byId: {...state.byId, ...data},
        loadingOne: false,
      }
    case USER_FETCH_ERROR:
      const { id, message } = action.payload;

      return setErrorForOne(state, id, message) as UserState;
    default:
      return state;
  }
};

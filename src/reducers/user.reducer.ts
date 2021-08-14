import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USER_FETCH_COMPLETED,
  USER_FETCH_ERROR,
  USER_FETCH_ONE,
  USER_QUERY,
  USER_QUERY_COMPLETED,
} from "../actions/actions.constants";
import { addMany, addOne, EntityState, getIds, initialEntityState, select, setErrorForOne } from "../models/Entity";
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
    case ME_FETCH:
    case ME_LOGIN:
      return addOne(state, action.payload) as UserState;
    case USER_QUERY:
      return { ...state, loadingList: true };
    case USER_QUERY_COMPLETED:
      const userIds = getIds(action.payload);
      const newState = addMany(state, action.payload) as UserState;
      return {
        ...newState,
        userIds: userIds,
        loadingList: false,
      };

    case USER_FETCH_ONE:
      return select(state, action.payload) as UserState;
    
      case USER_FETCH_COMPLETED:
        return {...addOne(state, action.payload, false) as UserState};
      case USER_FETCH_ERROR:
        const { id, message } = action.payload;
        
        return setErrorForOne(state, id, message) as UserState;
    default:
      return state;
  }
};

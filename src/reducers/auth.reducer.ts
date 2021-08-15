import { Reducer } from "redux";
import { ME_FETCH_COMPLETED, ME_LOGIN_COMPLETED, ME_LOGIN_ERROR } from "../actions/actions.constants";

export interface AuthState {
  id?: number;
  error?:string;
}

const initialState = {};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH_COMPLETED:
    case ME_LOGIN_COMPLETED:
      const userId = action.payload.id as number;
      return { ...state, id: userId };
      case ME_LOGIN_ERROR:
        return {...state, error:action.payload};
    default:
      return state;
  }
};

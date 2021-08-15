import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import {
  ME_FETCH,
  ME_FETCH_COMPLETED,
  ME_LOGIN,
  ME_LOGIN_COMPLETED,
  ME_LOGIN_ERROR,
} from "./actions.constants";

export const meFetchCompletedAction = (u: User) => ({
  type: ME_FETCH_COMPLETED,
  payload: u,
});

export const meFetchAction = () => ({ type: ME_FETCH });

export const userLoginAction = (data: { email: string; password: string }) => ({
  type: ME_LOGIN,
  payload: data,
});
export const userLoginCompleted = (u: User) => ({
  type: ME_LOGIN_COMPLETED,
  payload: u,
});
export const userLoginError = (msg: string) => ({
  type: ME_LOGIN_ERROR,
  payload: msg,
});

export const authAction = bindActionCreators(
  {
    fetch: meFetchAction,
  },
  store.dispatch
);

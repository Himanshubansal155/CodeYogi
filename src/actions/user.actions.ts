import { User } from "../models/User";
import {
  USER_FETCH_ONE_COMPLETE,
  USER_FETCH_ERROR,
  USER_FETCH_ONE,
  USER_QUERY,
  USER_QUERY_COMPLETED,
} from "./actions.constants";

export const userChangedAction = () => ({
  type: USER_QUERY,
});

export const userQueryCompleted = (users: User[]) => ({
  type: USER_QUERY_COMPLETED,
  payload: users,
});

export const userFetchCompleted = (user: User) => ({
  type: USER_FETCH_ONE_COMPLETE,
  payload: user,
});

export const userFetchOne = (selectedId: number) => ({
  type: USER_FETCH_ONE,
  payload: selectedId,
});

export const userFetchError = (id: number, message: string) => ({
  type: USER_FETCH_ERROR,
  payload: { id, message },
});

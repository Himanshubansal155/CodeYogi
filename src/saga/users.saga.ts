import { normalize } from "normalizr";
import { AnyAction } from "redux";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { USER_FETCH_ONE, USER_QUERY } from "../actions/actions.constants";
import {
  userFetchCompleted,
  userFetchError,
  userQueryCompleted,
} from "../actions/user.actions";
import {
  fetchUsers as fetchUsersAPI,
  fetchUser as fetchUserAPI,
} from "../api/Users";
import { userSchema } from "../models/schema";

export function* fetchUsers(): Generator<any> {
  const userResponse: any = yield call(fetchUsersAPI);
  const normalizedData = normalize(userResponse.data.data, [userSchema]);
  yield put(userQueryCompleted(normalizedData.entities.users));
}

export function* watchUserQueryChanged() {
  yield all([
    takeLatest(USER_QUERY, fetchUsers),
    takeLatest(USER_FETCH_ONE, fetchUser),
  ]);
}

export function* fetchUser(action: AnyAction): Generator<any> {
  try {
    const userResponseData: any = yield call(fetchUserAPI, action.payload);
    const normalizedData = normalize(userResponseData, userSchema);
    yield put(userFetchCompleted(normalizedData.entities.users));
  } catch (e) {
    const error = e.response.data?.message || "Some error Occured";
    yield put(userFetchError(action.payload, error));
  }
}

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

export function* fetchUsers(): Generator<any> {
  const groupResponse: any = yield call(fetchUsersAPI);
  yield put(userQueryCompleted(groupResponse.data.data));
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
    yield put(userFetchCompleted(userResponseData));
  } catch (e) {
    const error = e.response.data?.message || "Some error Occured";
    yield put(userFetchError(action.payload, error));
  }
}

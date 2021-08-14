import { AnyAction } from "redux";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { USER_FETCH_ONE, USER_QUERY } from "../actions/actions.constants";
import {
  userFetchCompleted,
  userQueryCompleted,
} from "../actions/user.actions";
import {
  fetchUsers as fetchUsersAPI,
  fetchUser as fetchGroupAPI,
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
  const groupResponseData: any = yield call(fetchGroupAPI, action.payload);
  yield put(userFetchCompleted(groupResponseData));
}
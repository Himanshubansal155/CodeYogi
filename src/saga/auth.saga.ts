import { AnyAction } from "redux";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { meFetchCompletedAction, userLoginCompleted, userLoginError } from "../actions/auth.actions";
import { login, me } from "../api/Auth";

export function* addUser(action: AnyAction): Generator<any> {
  try {
    const meResponse: any = yield call(login, action.payload);
    yield put(userLoginCompleted(meResponse));
  } catch (error) {
    yield put(userLoginError(error.response.data?.message));
  }
}

export function* watchLoginUserChanged() {
    yield all([
        takeEvery(ME_LOGIN, addUser),
        takeEvery(ME_FETCH, fetchUser),
      ]);
  yield 
}

export function* fetchUser(action:AnyAction): Generator<any> {
    const meData: any = yield call(me);
    yield put(meFetchCompletedAction(meData));
}
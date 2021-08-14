import { AnyAction } from "redux";
import { call, put, takeLatest, all } from "@redux-saga/core/effects";
import { GROUP_FETCH_ONE, GROUP_QUERY_CHANGED } from "../actions/actions.constants";
import {
  groupFetchCompleted,
  groupQueryCompleted,
} from "../actions/group.actions";
import {
  fetchGroup as fetchGroupAPI,
  fetchGroups as fetchGroupsAPI,
} from "../api/groups";

export function* fetchGroups(action: AnyAction): Generator<any> {
  const groupResponse: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(groupQueryCompleted(action.payload, groupResponse.data.data));
}

export function* watchGroupQueryChanged() {
  yield all([
    takeLatest(GROUP_QUERY_CHANGED, fetchGroups),
    takeLatest(GROUP_FETCH_ONE, fetchGroup),
  ]);
}

export function* fetchGroup(action: AnyAction): Generator<any> {
  const groupResponseData: any = yield call(fetchGroupAPI, action.payload);
  yield put(groupFetchCompleted(groupResponseData));
};

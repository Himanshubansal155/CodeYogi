import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { watchUserQueryChanged } from "./users.saga";
import { watchGroupQueryChanged } from "./groups.saga";
export const sagaMiddleware = createSagaMiddleware();


export default function* rootSaga() {
    yield all([
        watchUserQueryChanged(),
        watchGroupQueryChanged()
    ])
}
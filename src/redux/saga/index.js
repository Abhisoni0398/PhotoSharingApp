import { all, takeLatest } from "redux-saga/effects";
import * as actionLabels from "../type";
import { loginSaga } from "./auth/auth";

export function* watchAuthentication() {
  yield all([takeLatest(actionLabels.LOGIN_SAGA, loginSaga)]);
}

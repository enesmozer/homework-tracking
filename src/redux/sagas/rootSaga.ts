import { all } from "redux-saga/effects";
import watcherLogin from "./loginUser";

export default function* rootSaga() {
  yield all([watcherLogin()]);
}

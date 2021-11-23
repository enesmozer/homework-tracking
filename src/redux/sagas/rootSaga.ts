import { all } from "redux-saga/effects";
import watcherLogin from "./loginUser";
import watcherGetTeachers from "./getTeachers";

export default function* rootSaga() {
  yield all([watcherLogin(), watcherGetTeachers()]);
}

import { all } from "redux-saga/effects";
import watcherLogin from "./loginUser";
import watcherGetTeachers from "./getTeachers";
import watcherGetStudents from "./getStudents";
import watcherGetTeacherById from "./getTeacherById";
import watcherGetHomeworksByStudent from "./getHomeworksByStudent";

export default function* rootSaga() {
  yield all([
    watcherLogin(),
    watcherGetTeachers(),
    watcherGetStudents(),
    watcherGetTeacherById(),
    watcherGetHomeworksByStudent()
  ]);
}

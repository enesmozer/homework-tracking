import { call, put, takeEvery } from "redux-saga/effects";
import studentService from "../../services/student";
import ResponseGenerator from "../../utils/ResponseGenerator";

function* getStudents(action: any) {
  try {
    const students: ResponseGenerator = yield call(
      studentService.getStudentByTeacher,
      action.teacherId
    );
    yield put({ type: "GET_STUDENTS_SUCCESS", students });
  } catch (err) {
    yield put({ type: "GET_STUDENTS_FAILED", message: err });
  }
}

function* watcherGetStudents() {
  yield takeEvery("GET_STUDENTS_REQUESTED", getStudents);
}

export default watcherGetStudents;

import { call, put, takeEvery } from "redux-saga/effects";
import studentService from "../../services/student";
import ResponseGenerator from "../../utils/ResponseGenerator";

function* getStudentByUserId(action: any) {
  try {
    const students: ResponseGenerator = yield call(
      studentService.getStudentByUserId,
      action.userId
    );
    yield put({ type: "GET_STUDENT_BY_USERID_SUCCESS", students });
  } catch (err) {
    yield put({ type: "GET_STUDENT_BY_USERID_FAILED", message: err });
  }
}

function* watcherGetStudentByUserId() {
  yield takeEvery("GET_STUDENT_BY_USERID_REQUESTED", getStudentByUserId);
}

export default watcherGetStudentByUserId;

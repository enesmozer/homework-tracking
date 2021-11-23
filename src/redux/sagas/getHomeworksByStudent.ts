import { call, put, takeEvery } from "redux-saga/effects";
import homeworkService from "../../services/homework";
import ResponseGenerator from "../../utils/ResponseGenerator";

function* getHomeworksByStudent(action: any) {
  try {
    const homeworks: ResponseGenerator = yield call(
      homeworkService.getHomeworkByStudent,
      action.studentId
    );
    yield put({ type: "GET_HOMEWORKS_SUCCESS", homeworks });
  } catch (err) {
    yield put({ type: "GET_HOMEWORKS_FAILED", message: err });
  }
}

function* watcherGetHomeworksByStudent() {
  yield takeEvery("GET_HOMEWORKS_REQUESTED", getHomeworksByStudent);
}

export default watcherGetHomeworksByStudent;

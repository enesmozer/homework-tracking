import { call, put, takeEvery } from "redux-saga/effects";
import teacherService from "../../services/teacher";
import ResponseGenerator from "../../utils/ResponseGenerator";

function* getTeacherByUserId(action: any) {
  try {
    const teachers: ResponseGenerator = yield call(
      teacherService.getTeacherByUserId,
      action.userId
    );
    yield put({ type: "GET_TEACHER_BY_USERID_SUCCESS", teachers });
  } catch (err) {
    yield put({ type: "GET_TEACHER_BY_USERID_FAILED", message: err });
  }
}

function* watcherGetTeacherByUserId() {
  yield takeEvery("GET_TEACHER_BY_USERID_REQUESTED", getTeacherByUserId);
}

export default watcherGetTeacherByUserId;

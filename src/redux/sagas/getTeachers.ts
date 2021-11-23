import { call, put, takeEvery } from "redux-saga/effects";
import teacherService from "../../services/teacher";
import ResponseGenerator from "../../utils/ResponseGenerator";

function* getTeachers() {
  try {
    const teachers: ResponseGenerator = yield call(teacherService.getTeachers);
    yield put({ type: "GET_TEACHERS_SUCCESS", teachers });
  } catch (err) {
    yield put({ type: "GET_TEACHERS_FAILED", message: err });
  }
}

function* watcherGetTeachers() {
  yield takeEvery("GET_TEACHERS_REQUESTED", getTeachers);
}

export default watcherGetTeachers;

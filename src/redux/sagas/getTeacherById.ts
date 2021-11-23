import { call, put, takeEvery } from "redux-saga/effects";
import teacherService from "../../services/teacher";
import ResponseGenerator from "../../utils/ResponseGenerator";

function* getTeacherById(action: any) {
  try {
    const teachers: ResponseGenerator = yield call(
      teacherService.getTeacherById,
      action.id
    );
    yield put({ type: "GET_TEACHER_BY_ID_SUCCESS", teachers });
  } catch (err) {
    yield put({ type: "GET_TEACHER_BY_ID_FAILED", message: err });
  }
}

function* watcherGetTeacherById() {
  yield takeEvery("GET_TEACHER_BY_ID_REQUESTED", getTeacherById);
}

export default watcherGetTeacherById;

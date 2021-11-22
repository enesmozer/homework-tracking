import { call, put, takeEvery } from "redux-saga/effects";
import userService from "../../services/user";
import ResponseGenerator from "../../utils/ResponseGenerator";

 function* handleLogin() {
  try {
    const user: ResponseGenerator = yield call(
      userService.login,
    );
    yield put({ type: "LOGIN_SUCCESS", user });
  } catch (err) {
    yield put({ type: "LOGIN_FAILED", message: err });
  }
}

function* watcherLogin() {
  yield takeEvery("LOGIN_REQUESTED", handleLogin);
}

export default watcherLogin;

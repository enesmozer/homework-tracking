import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import user from "./reducers/user";
import teacher from "./reducers/teacher";
import students from "./reducers/students";
import homework from "./reducers/homework";
import rootSaga from "./sagas/rootSaga";

const reducers = combineReducers({
  user,
  teacher,
  students,
  homework,
});
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = compose(
  applyMiddleware(...middleware)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);
export default store;

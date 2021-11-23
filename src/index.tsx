import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import TeacherList from "./components/TeacherList";
import StudentsList from "./components/StudentsList";
import HomeworkList from "./views/HomeworkList";
import LoginForm from "./components/LoginForm";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="teachers" element={<TeacherList />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="students/" element={<StudentsList />}>
          <Route path=":teacherId" element={<StudentsList />} />
        </Route>
        <Route path="homeworks/" element={<HomeworkList />}>
          <Route path=":studentId" element={<HomeworkList />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

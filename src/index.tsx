import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import TeacherList from "./components/TeacherList";
import LoginForm from "./components/LoginForm";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="teachers" element={<TeacherList />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

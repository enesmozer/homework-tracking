/* eslint-disable react-hooks/rules-of-hooks */
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  getStudentByUserId,
  getTeacherByUserId,
  login,
} from "../redux/actions/index";
import { useEffect, useMemo, useState } from "react";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootStateOrAny) => state.user.users);
  const teacher = useSelector(
    (state: RootStateOrAny) => state.teacher.teachers
  );
  const student = useSelector(
    (state: RootStateOrAny) => state.students.students
  );
  useEffect(() => {
    dispatch(login());
  }, [dispatch]);

  const [loginUser, setLoginUser] = useState<any>({});
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const onFinish = async (values: any) => {
    setUsername(values.username);
    setPassword(values.password);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (username && password) {
      setLoginUser(
        users.find(
          (user: RootStateOrAny) =>
            user.username === username && user.password === password
        )
      );
      if (Object.keys(loginUser).length) {
        if (loginUser.role === "teacher") {
          dispatch(getTeacherByUserId(loginUser.id));
        } else if (loginUser.role === "student") {
          dispatch(getStudentByUserId(loginUser.id));
        } else {
          navigate("/teachers");
        }
      }
      //  else {
      //   alert("Login failed. Please check username or password");
      // }
    }
  }, [username, password, users, dispatch, navigate, loginUser]);
  useMemo(() => {
    localStorage.setItem(
      "loginUser",
      JSON.stringify({
        role: loginUser.role,
        id: loginUser.id,
        teacherId: teacher.id,
        studentId: student.id,
      })
    );
    console.log(student);
    if (loginUser.role === "student" && student.id) {
      navigate(`/homeworks/${student.id}`);
    } else if (loginUser.role === "teacher" && teacher.id) {
      navigate(`/students/${teacher.id}`);
    }
  }, [student, teacher, navigate, loginUser]);
  return (
    <div className="login-form">
      {users.length > 0 ? (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="login-form"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Spin />
      )}
    </div>
  );
}
export default LoginForm;

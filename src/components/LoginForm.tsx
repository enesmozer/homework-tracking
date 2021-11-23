import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/index";
import { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootStateOrAny) => state.user.users);

  useEffect(() => {
    dispatch(login());
  }, [dispatch]);
  const onFinish = (values: any) => {
    const loginUser = users.filter(
      (user: RootStateOrAny) =>
        user.username === values.username && user.password === values.password
    );
    if (loginUser) {
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
      navigate("/teachers");
    } else {
      alert("Login failed. Please check username or password");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-form">
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
    </div>
  );
}
export default LoginForm;

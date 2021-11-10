import { Button, Checkbox, Form, Input } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const {login} = useActions();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const submit = ({ username, password }: any) => {
    console.log("submit", username, password);
    login(username, password);
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Field is required")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
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
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

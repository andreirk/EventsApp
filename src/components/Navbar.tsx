import { Layout, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const {logout} = useActions()
  const router = useHistory();
  const {isAuth, user} = useTypedSelector(state => state.auth)
  return (
    <Layout.Header>
      <Row justify="end">
        {!!isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode={"horizontal"} selectable={false}>
              <Menu.Item
                key={1}
                onClick={() => {
                  logout()
                }}
              >
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode={"horizontal"} selectable={false}>
            <Menu.Item
              key={1}
              onClick={() => {
                router.push(RouteNames.LOGIN);
              }}
            >
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

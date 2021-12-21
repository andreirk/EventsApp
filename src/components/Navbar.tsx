import { Button, Divider, Dropdown, Layout, Menu, Row } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { AiFillAppstore, AiOutlineSetting } from "react-icons/ai";
import MainMenu from "./MainMenu";

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { logout } = useActions();
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  console.log("router", router);

  const menu = (
    <Menu selectable={false}>
      <Menu.Item
        key={'username'}
        onClick={() => {
          logout();
        }}
      >
        {user.username}
      </Menu.Item>
      <Menu.Item
        key={1}
        onClick={() => {
          logout();
        }}
      >
        Баланс
      </Menu.Item>
      <Menu.Item
        key={1}
        onClick={() => {
          logout();
        }}
      >
        Профиль
      </Menu.Item>
      <Menu.Item
        key={1}
        onClick={() => {
          logout();
        }}
      >
        Услуги
      </Menu.Item>
      <Menu.Item
        key={1}
        onClick={() => {
          logout();
        }}
      >
        Настройки
      </Menu.Item>
      <Menu.Item
        key={'logout'}
        onClick={() => {
          logout();
        }}
      >
        Выйти
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header>
      <Row justify="space-between">
        <MainMenu />

        {!!isAuth ? (
          <Dropdown overlay={menu} overlayStyle={{top: '20px'}  } >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
           <AiOutlineSetting size={'35px'} color="black" />
            </a>
          </Dropdown>
        ) : (
          <Menu mode={"horizontal"} selectable={false}>
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

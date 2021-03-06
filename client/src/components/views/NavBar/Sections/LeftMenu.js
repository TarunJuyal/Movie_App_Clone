import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LeftMenu(props) {
  const user = useSelector((state) => state.user);
  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="favourite">
          <Link to="/favourite">Favourites</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;

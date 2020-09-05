import React from "react";
import { Menu, Input } from "antd";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../../actions/userActions";
import { SearchOutlined } from "@ant-design/icons";

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  const searchHandler = (e) => {
    let searchValue = e.target.value;
    window.location.href = `/search/${searchValue}`;
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="searchBar">
          <Input
            onPressEnter={searchHandler}
            placeholder="Search Movie"
            suffix={<SearchOutlined />}
          ></Input>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="/login">Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="searchBar">
          <Input
            onPressEnter={searchHandler}
            placeholder="Search Movie"
            suffix={<SearchOutlined />}
          ></Input>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);

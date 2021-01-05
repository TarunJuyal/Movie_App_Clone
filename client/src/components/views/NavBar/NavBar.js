import React, { useState, Suspense } from "react";
import { Drawer, Button } from "antd";
import Icon from "@ant-design/icons";
import "./Sections/Navbar.css";
import Logo from "../../../images/Logo.png";
import { LoadingOutlined } from "@ant-design/icons";

const LeftMenu = React.lazy(()=>import("./Sections/LeftMenu"));
const RightMenu = React.lazy(()=>import("./Sections/RightMenu"));

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Suspense fallback={<div className="app"><LoadingOutlined style={{ fontSize: "4rem" }} /></div>}>
        <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "100%", marginTop: "-5px" }}
          />
        </a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
    </Suspense>
  );
}

export default NavBar;

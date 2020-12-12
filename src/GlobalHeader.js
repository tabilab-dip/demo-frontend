import React from "react";
import logo from "./assets/images/boun_logo.png";
import { Layout, Menu, Typography, PageHeader } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const GlobalHeader = () => {
  return (
    <Header
      style={{ position: "fixed", zIndex: 1, width: "100%", height: "10%" }}
    >
      <div className="logo" />
      <img src={logo} alt="App logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["-1"]}
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: "5px 0px",
          // float: "right",
        }}
      >
        <Menu.Item key="1">
          <a href="/home">Home</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a
            href="https://tabilab.cmpe.boun.edu.tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </Menu.Item>

        <Menu.Item key="4">
          <a
            href="https://tabilab.cmpe.boun.edu.tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tabilab Home
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default GlobalHeader;

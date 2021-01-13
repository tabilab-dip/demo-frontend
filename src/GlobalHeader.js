import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import tr_flag from "./assets/images/tr.svg";
import en_flag from "./assets/images/gb.svg";
// TODO change the logo
import logo from "./assets/images/boun_logo.png";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const GlobalHeader = () => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      {/* <img src={logo} alt="App logo" /> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["-1"]}>
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
      <div
        className="flag-list"
        style={{
          position: "absolute",
          left: "95%",
          top: "50%",
          overflow: "auto",
          transform: " translate(-50%, -50%)",
        }}
      >
        <img
          src={tr_flag}
          // onClick=TODO: change language
          style={{ height: "25px", width: "35px" }}
        />
        <img
          src={en_flag}
          // onClick=TODO: change language
          style={{ height: "25px", width: "35px" }}
        />
      </div>
    </Header>
  );
};

export default GlobalHeader;

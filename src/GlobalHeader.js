import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import tr_flag from "./assets/images/tr.svg";
import en_flag from "./assets/images/gb.svg";
// TODO change the logo
import logo from "./assets/images/boun_logo.png";
import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";

const { Header } = Layout;
const GlobalHeader = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  };

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
          <a href="/home">{t("header.home")}</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="/about">{t("header.about")}</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a
            href="https://tabilab.cmpe.boun.edu.tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("header.repository")}
          </a>
        </Menu.Item>

        <Menu.Item key="4">
          <a
            href="https://tabilab.cmpe.boun.edu.tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("header.tabilab_home")}
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
        <a>
          <img
            src={tr_flag}
            style={{ height: "25px", width: "35px" }}
            onClick={() => changeLanguage("tr")}
          />
        </a>
        <a>
          <img
            src={en_flag}
            style={{ height: "25px", width: "35px" }}
            onClick={() => changeLanguage("en")}
          />
        </a>
      </div>
    </Header>
  );
};

export default GlobalHeader;

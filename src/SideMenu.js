import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

const SideMenu = () => {
  const { t, i18n } = useTranslation();
  return (
    <Sider
      className="site-layout-background"
      width={300}
      style={{
        overflow: "auto",
        height: "90vh",
        position: "fixed",
        top: "70px",
        left: 0,
      }}
    >
      <Menu theme="white" mode="inline">
        <Menu.Item key="/sentiment" className="local-header-text">
          <Link to="/sentiment">{t("side_menu.sentiment")}</Link>
        </Menu.Item>
        <Menu.Item key="/morph-parser" className="local-header-text">
          <Link to="/morph-parser">{t("side_menu.mparser")}</Link>
        </Menu.Item>
        <Menu.Item key="/ner1" className="local-header-text">
          <Link to="/ner1">{t("side_menu.ner")}</Link>
        </Menu.Item>
        <Menu.Item key="/dep-parser1" className="local-header-text">
          <Link to="/dep-parser1">{t("side_menu.dparser")}</Link>
        </Menu.Item>
        <Menu.Item key="/mwe1" className="local-header-text">
          <Link to="/mwe1">{t("side_menu.mwe")}</Link>
        </Menu.Item>
        <Menu.Item key="/test" className="local-header-text">
          <Link to="/test">Test</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SideMenu);

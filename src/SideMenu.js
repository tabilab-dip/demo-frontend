import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

const SideMenu = () => {
  const { t, i18n } = useTranslation();
  return (
    <Sider
      className="site-layout-background"
      width={200}
      style={{
        overflow: "auto",
        height: "90vh",
        position: "fixed",
        top: "70px",
        left: 0,
      }}
    >
      <Menu theme="white" mode="inline">
        <Menu.Item key="/sentiment">
          <Link to="/sentiment" style={{ fontSize: "14px" }}>
            {t("side_menu.sentiment")}
          </Link>
        </Menu.Item>
        <Menu.Item key="/morph-parser">
          <Link to="/morph-parser" style={{ fontSize: "14px" }}>
            {t("side_menu.mparser")}
          </Link>
        </Menu.Item>
        <Menu.Item key="/ner1">
          <Link to="/ner1" style={{ fontSize: "14px" }}>
            {t("side_menu.ner")}
          </Link>
        </Menu.Item>
        <Menu.Item key="/dep-parser1">
          <Link to="/dep-parser1" style={{ fontSize: "14px" }}>
            {t("side_menu.dparser")}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SideMenu);

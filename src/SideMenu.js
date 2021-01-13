import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";

const { Sider } = Layout;

class SideMenu extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { location } = this.props;
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
              Sentiment Analysis
            </Link>
          </Menu.Item>
          <Menu.Item key="/morph-parser">
            <Link to="/morph-parser" style={{ fontSize: "14px" }}>
              Morphological Analysis
            </Link>
          </Menu.Item>
          <Menu.Item key="/ner1">
            <Link to="/ner1" style={{ fontSize: "14px" }}>
              NER
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideMenu);

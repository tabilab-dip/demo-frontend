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
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        // collapsible
        // collapsed={collapsed}
        // onCollapse={this.onCollapse}
      >
        <Menu
          style={{ height: "100%", padding: "150px 0px" }}
          theme="white"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/sentiment">
            <Link to="/sentiment">Sentiment Analysis</Link>
          </Menu.Item>
          <Menu.Item key="/morph-parser">
            <Link to="/morph-parser">Morphological Parsing</Link>
          </Menu.Item>
          <Menu.Item key="/ner1">
            <Link to="/ner1">NER</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideMenu);

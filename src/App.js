import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MorphParser from "./MorphParser";
import Sentiment from "./Sentiment";
import GlobalHeader from "./GlobalHeader";
import Home from "./Home";
import About from "./About";
import SideMenu from "./SideMenu";
import Ner from "./Ner";

import { Layout } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
const { Content, Footer, Header } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <GlobalHeader />
        <Content>
          <Layout className="site-layout-background">
            <SideMenu />
            <Content
              className="site-layout"
              style={{ padding: "160px 240px", minHeight: "700px" }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/morph-parser" component={MorphParser} />
                <Route path="/sentiment" component={Sentiment} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/ner1" component={Ner} />
                <Route path="*" component={Home} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Tabilab Tools Demo Platform
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;

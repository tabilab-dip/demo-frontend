import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MorphParser from "./MorphParser";
import Sentiment from "./Sentiment";
import GlobalHeader from "./GlobalHeader";
import Home from "./Home";
import "antd/dist/antd.css";
import About from "./About";
import SideMenu from "./SideMenu";
import Ner from "./Ner";
import DepParser from "./DepParser";
import Mwe from "./Mwe";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";

const { Content, Footer, Header } = Layout;
const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <Router>
      <Layout>
        <GlobalHeader />
        <Content>
          <Layout className="site-layout-background">
            <SideMenu />
            <Content
              className="site-layout"
              style={{
                paddingLeft: "340px",
                paddingRight: "100px",
                paddingTop: "100px",
                paddingBottom: "0px",
                minHeight: "700px",
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/morph-parser" component={MorphParser} />
                <Route path="/sentiment" component={Sentiment} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/ner1" component={Ner} />
                <Route path="/mwe1" component={Mwe} />
                <Route path="/dep-parser1" component={DepParser} />
                <Route path="*" component={Home} />
              </Switch>
              <Footer style={{ textAlign: "center" }}>{t("footer")}</Footer>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;

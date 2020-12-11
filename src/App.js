import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MorphParser from "./MorphParser";
import Sentiment from "./Sentiment";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
const App = () => {
  return (
    <body className="tr">
      <Router>
        <Header />
        <div id="main">
          <div className="centerblock">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/morph-parser">
                <MorphParser />
              </Route>
              <Route path="/sentiment">
                <Sentiment />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </body>
  );
};

export default App;

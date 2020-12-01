import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MorphParser from "./MorphParser";
import Sentiment from "./Sentiment";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tabilab Tools</h1>
        </header>
        <Navbar></Navbar>
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
      </Router>
    </>
  );
};

export default App;

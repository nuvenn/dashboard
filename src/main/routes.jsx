import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home/home";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

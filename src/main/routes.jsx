import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home/home";
import Consultas from "../pages/consultas/consultas";
import Pagamentos from "../pages/pagamentos/pagamentos";

export default () => (
  <Router>
    <Switch>
      <Route path="/home/" exact component={Home}></Route>
      <Route path="/consultas/" exact component={Consultas}></Route>
      <Route path="/pagamentos/" exact component={Pagamentos}></Route>
      <Redirect from="*" to="/home/" />
    </Switch>
  </Router>
);

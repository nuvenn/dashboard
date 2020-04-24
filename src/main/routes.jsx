import React from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/home";
import Consultas from "../pages/consultas/consultas";
import Pagamentos from "../pages/pagamentos/pagamentos";
import PrivateRoute from "./privateRoute";

export default () => (
  <Router>
    <Switch>
      <PrivateRoute
        path="/home/"
        title="Bem vindo ao Cockpit"
        exact
        component={Home}
      />
      <PrivateRoute
        path="/consultas/"
        title="Consultas"
        exact
        component={Consultas}
      />
      <PrivateRoute
        path="/pagamentos/"
        title="Pagamentos"
        exact
        component={Pagamentos}
      />
      <Redirect from="*" to="/home/" />
    </Switch>
  </Router>
);

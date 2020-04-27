import React from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/home";
import QuantidadeVinculos from "../pages/quantidadeVinculos/quantidadeVinculos";
import TotaisFolha from "../pages/totaisFolha/totaisFolha";
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
        path="/quantidadevinculos/"
        title="Quantidade de Vínculos"
        exact
        component={QuantidadeVinculos}
      />
      <PrivateRoute
        path="/totaisfolha/"
        title="Totais de Folha"
        exact
        component={TotaisFolha}
      />
      <Redirect from="*" to="/home/" />
    </Switch>
  </Router>
);

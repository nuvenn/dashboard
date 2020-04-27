import React from "react";
import { Route } from "react-router-dom";

import Layout from "../components/layout/layout";
import Login from "../pages/login/login";

export default function PrivateRoute(props) {
  return (
    <>
      {JSON.parse(localStorage.getItem("_u")) ? (
        <Layout title={props.title}>
          <Route {...props} />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}

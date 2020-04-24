import React from "react";
import { Route } from "react-router-dom";

import Layout from "../components/layout/layout";

export default function PrivateRoute(props) {
  return (
    <>
      <Layout title={props.title}>
        <Route {...props} />
      </Layout>
    </>
  );
}

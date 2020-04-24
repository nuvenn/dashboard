import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

import Layout from "../components/layout/layout";
import Login from "../pages/login/login";

export default function PrivateRoute(props) {
  const [permissions, setPermissions] = useState({});

  const getPermissions = async () => {
    let response = await axios.get("api/permissions");
    let { data } = response;
    setPermissions({ permissions: data });
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <>
      {!_.isEmpty(permissions) ? (
        <Layout title={props.title}>
          <Route {...props} />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}

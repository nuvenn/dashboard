import React from "react";
import ReactDOM from "react-dom";
import Routes from "./main/routes";
import Providers from "./main/providers";

ReactDOM.render(
  <Providers>
    <Routes />
  </Providers>,
  document.getElementById("root")
);

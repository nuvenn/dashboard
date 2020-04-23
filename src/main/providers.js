import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import "moment/locale/pt-br";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import reducers from "./reducers";
import theme from "../theme";

const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default (props) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
    </Provider>
  );
};

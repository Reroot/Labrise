import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_backend";
import { App } from "./App";
// setup fake backend
import { configureFakeBackend } from "./_backend";
import { runWithAdal } from "react-adal";
import { authContext } from "./_adalconfig/adalConfig";
import { ThemeProvider } from "@material-ui/styles";
const DO_NOT_LOGIN = false;

configureFakeBackend();

runWithAdal(
  authContext,
  () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.getElementById("app")
    );
  },
  DO_NOT_LOGIN
);

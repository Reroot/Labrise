import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./_helpers";
import { App } from "./App";

// setup fake backend
import { configureFakeBackend } from "./_helpers";
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

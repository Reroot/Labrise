import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { PatientPage } from "../PatientPage/PatientPage";
import { Header } from "../_components";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.loggedIn);

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "1vh",
        paddingLeft: "2vh",
        paddingRight: "1vh",
      }}
    >
      <Router history={history}>
        {/*
        Need to make this more fluid with pending before displaying
        */}
        {user && <Header />}

        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/labresults"></Route>
          <PrivateRoute path="/patient" component={PatientPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export { App };

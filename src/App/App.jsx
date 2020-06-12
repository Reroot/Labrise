import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

import Container from "react-bootstrap/Container";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Container>
      <div className="jumbotron">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
      <div id="contentDiv">
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export { App };

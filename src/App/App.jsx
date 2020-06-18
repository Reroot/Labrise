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
// import { Corona } from "../HomePage/components/Corona_Component/Corona";
// import {CoronaRender} from "../HomePage/components/Corona_Component/CoronaRender";
import { Dashboard } from "../HomePage/components/lai_components/dashboard"
function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);

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
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <Router history={history}>
        {/*
        Need to make this more fluid with pending before displaying
        */}
        {user && <Header />}
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          {/* <Route path="/corona" component={Corona} /> */}
          <Route path="/" component={Dashboard}></Route>
          <PrivateRoute path="/patient" component={PatientPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export { App };

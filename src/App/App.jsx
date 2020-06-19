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
import { ProfilePage } from "../_components/profile";

// import { Corona } from "../HomePage/components/Corona_Component/Corona";
// import {CoronaRender} from "../HomePage/components/Corona_Component/CoronaRender";
import { Dashboard } from "../HomePage/components/lai_components/dashboard";

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
        height: "9vh",
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
          <PrivateRoute exact path="/" ><Dashboard patient="Hyperlipidemia" /></PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          {/* <Route path="/corona" component={Corona} /> */}
          <Route path="/labresults">
            
          </Route>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/patient">
            <PatientPage />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export { App };

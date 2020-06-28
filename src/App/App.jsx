import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_backend";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
// import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../_components/LoginPage/LoginPage";
import { RegisterPage } from "../_components/RegisterPage";
import { PatientPage } from "../_components/PatientPage/PatientPage";
import { Header } from "../_components";
import { ProfilePage } from "../_components/profile";
import { ThemeProvider } from "@material-ui/core";
import CoronaPanel from "../_components/Corona_Component/CoronaPanel";
// import {CoronaRender} from "../HomePage/components/Corona_Component/CoronaRender";
// import { Dashboard } from "../_components/LabResultsComponent/dashboard";
//import { HomePage } from "../_components/HomePage/HomePage";
import PatientContextWrapper from "../_components/HomePage/PatientContextWrapper";


// Import the Lab Report Viewer component & the Dashboard component
import { LabReports_Component, Dashboard_Component } from "../_components/LabResultsComponent/labResults-Container";


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
          <PrivateRoute exact path="/" component={PatientContextWrapper}>
          </PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/corona" component={CoronaPanel} />
          {/* <Route path="/labresults">
            <Dashboard patient="Hyperlipidemia" />
          </Route> */}
          <Route path="/profile" component={ProfilePage} />
          <Route path="/patient">
            <PatientPage />
          </Route>
          

          {/* This is the Lab Report Viewer component */}
          <Route path="/labreports">
            <LabReports_Component />
          </Route>
          {/* This is the Dashboard component */}
          <Route path="/dashboard">
            <Dashboard_Component />
          </Route>
          
          
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export { App };

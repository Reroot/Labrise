import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";

import { history } from "../_backend";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { LoginPage } from "../_components/LoginPage/LoginPage";
import { RegisterPage } from "../_components/RegisterPage";
import PatientPage from "../_components/PatientPage/PatientPage";
import { Header } from "../_components";
// import { NewHeader } from "../_components";
import  ProfileContainer  from "../_components/Profile/ProfileWrapper";
// import  ProfilePage  from "../_components/Profile/profile";
import { ThemeProvider } from "@material-ui/core";
import CoronaPanel from "../_components/Corona_Component/CoronaPanel";
// import {CoronaRender} from "../HomePage/components/Corona_Component/CoronaRender";
import { Dashboard } from "../_components/LabResultsComponent/_dashboard";
//import { HomePage } from "../_components/HomePage/HomePage";
import PropTypes from "prop-types";

import BeetleContainer from "../_components/ScottStuff/BeetleContainer";
//import PatientContextWrapper from "../_components/HomePage/PatientContextWrapper"

//import Scott_Component from "../_components/ScottStuff/Scott_Component";
//import { HomePage } from "../_components/HomePage/HomePage";
import PatientContextWrapper from "../_components/HomePage/PatientContextWrapper";



// Import the Home Page component
import { HomePage_Component } from "../_components/HomePage/lai_home-Container";
// Import the Lab Report Viewer component & the Dashboard component
import {
  LabReports_Component,
  Dashboard_Component,
} from "../_components/LabResultsComponent/labResults-Container";

function App(props) {
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
      // style={{
      //   height: "10vh",
      //   paddingLeft: "3vw",
      //   paddingRight: "3vw",
      // }}
    >
      <Router history={history}>
        {/*
        Need to make this more fluid with pending before displaying
        */}
        {/* {user && <NewHeader />} */}
        {user && <Header />}
        {/* <Header/> */}
        <Switch>
          {/* <PrivateRoute
            exact
            path="/"
            component={ProfileContainer}
            // component={ProfilePage}
            {...props}
          ></PrivateRoute> */}
          <PrivateRoute exact path="/" component={PatientContextWrapper}>
            {/* <HomePage_Component /> */}
            {/* <PatientContextWrapper {...props} User={user}/> */}
          </PrivateRoute>

          <Route path="/login" component={LoginPage} {...props} />
          <Route path="/register" component={RegisterPage} {...props} />
          <Route path="/corona" component={CoronaPanel} {...props} />
          {/* <Route path="/labresults" >
            <Dashboard patient="Hyperlipidemia" {...props}/>
          </Route>     
          
           */}
          <Route path="/profile" component={ProfileContainer} {...props} />
          {/* <Route path="/profile" component={ProfilePage} {...props} /> */}
          <Route path="/patient">
            <PatientPage {...props} />
          </Route>
          
          {/* This is the Lab Report Viewer component */}
          {/* <Route path="/labreports" component={ProfileContainer} {...props} /> */}
          <Route path="/labreports">
            <LabReports_Component />
          </Route>
          
          {/* This is the Dashboard component */}
          {/* <Route path="/dashboard" component={ProfileContainer} {...props} /> */}
          <Route path="/dashboard">
            <Dashboard_Component />
          </Route>

          <Route path="/appointments" component={ProfileContainer} {...props} />
          {/* <Route
            path="/appointments"
            component={BeetleContainer}
            loggedInUser={user}
            {...props}
          /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

App.propTypes = {
  actions: PropTypes.object,
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(App);

export { App };

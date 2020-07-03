import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";

import { history } from "../_backend";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
// import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../_components/LoginPage/LoginPage";
import { RegisterPage } from "../_components/RegisterPage";
import  PatientPage  from "../_components/PatientPage/PatientPage";
import { Header } from "../_components";
import  ProfileContainer  from "../_components/Profile/ProfileContainer";
import { ThemeProvider } from "@material-ui/core";
import CoronaPanel from "../_components/Corona_Component/CoronaPanel";
// import {CoronaRender} from "../HomePage/components/Corona_Component/CoronaRender";
import { Dashboard } from "../_components/LabResultsComponent/dashboard";
//import { HomePage } from "../_components/HomePage/HomePage";
import PatientContextWrapper from "../_components/HomePage/PatientContextWrapper";
import PropTypes from "prop-types";

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
        {/* {user && <Header />} */}
        <Header/>
        <Switch>
          <PrivateRoute exact path="/" component={ProfileContainer} >
          </PrivateRoute>
          <Route path="/login" component={LoginPage} {...props}/>
          <Route path="/register" component={RegisterPage} {...props}/>
          <Route path="/corona" component={CoronaPanel} {...props}/>
          <Route path="/labresults" >
            <Dashboard patient="Hyperlipidemia" {...props}/>
          </Route>
          <Route path="/profile" component={ProfileContainer} loggedInUser={user} {...props}/>
          <Route path="/patient" >
            <PatientPage {...props}/>
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state){
  return {
      user: state.authentication.user
  }
}

function mapDispatchToProps(dispatch){
  return { 
      actions: bindActionCreators(userActions, dispatch)
  }
}

App.propTypes = {
  actions: PropTypes.object
};

// export default connect( 
//   mapStateToProps,
//   mapDispatchToProps
//   )(App);

export { App };
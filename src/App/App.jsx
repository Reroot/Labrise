import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { PatientPage } from "../PatientPage/PatientPage"
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";

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
        {user && (
          <Grid
            container
            id="headerGrid"
            direction="row"
            justify="center"
            style={{ height: "10vh" }}
          >
            <Grid item xs={3}>
              <h1>Hi {user.firstName}!</h1>
            </Grid>
            <Grid container item xs={7} justify="center">
              <Grid item>
                <ButtonGroup
                  variant="contained"
                  // color="secondary"
                  aria-label="contained primary button group"
                >
                  <Button>
                    <Link to="/" style={{ color: "black" }}>
                      Home
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/patient" style={{ color: "black" }}>
                      Invoices
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/labresults" style={{ color: "black" }}>
                      Lab results
                    </Link>
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <Button variant="outlined" color="primary">
                <Link to="/login">Logout</Link>
              </Button>
            </Grid>
          </Grid>
        )}
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

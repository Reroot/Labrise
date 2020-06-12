import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Pay";
import PayPalButton from "./components/PaypalButton";

import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";

function HomePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <Grid
      container
      id="mainGrid"
      direction="column"
      style={{ height: "100vh" }}
    >
      <Grid item style={{ height: "10vh" }}>
        <Grid container id="headerGrid" direction="row">
          <Grid item xs={3}>
            <h1>Hi {user.firstName}!</h1>
          </Grid>
          <Grid item xs={7}>
            <Grid item>
              <ButtonGroup
                variant="contained"
                color="white"
                aria-label="contained primary button group"
              >
                <Button>
                  <Link to="/" style={{ color: "black" }}>
                    Home
                  </Link>
                </Button>
                <Button>
                  <Link to="/5" style={{ color: "black" }}>
                    Two
                  </Link>
                </Button>
                <Button>Lab Results</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid item xs={2} style={{ textAlign: "right" }}>
            <Button variant="outlined" color="primary">
              <Link to="/login">Logout</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ height: "80vh" }}>
        Content Home Page
      </Grid>
      <Grid item style={{ height: "10vh" }}>
        <Pay />
      </Grid>
    </Grid>
  );
}

export { HomePage };

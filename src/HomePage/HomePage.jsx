import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Pay";
import PayPalButton from "./components/PaypalButton";

import Grid from "@material-ui/core/Grid";

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
    <Grid container id="mainGrid">
      <Grid container id="headerGrid" justify="space-between">
        <Grid item xs={3}>
          <h1>Hi {user.firstName}!</h1>
        </Grid>
        <Grid item xs={3} style={{ textAlign: "right" }}>
          <Link to="/login">Logout</Link>
        </Grid>
      </Grid>
      <Grid item xs>
        <p>You're logged in with Labrise!!</p>
      </Grid>
      <Grid item xs>
        <Pay />
      </Grid>
    </Grid>
  );
}

export { HomePage };

import React, { useEffect } from "react";
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
    <Grid container direction="column" style={{ height: "90vh" }}>
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

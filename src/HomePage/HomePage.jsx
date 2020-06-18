import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Artems_Pay_Component/Pay";

import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";
import {PatientPage} from '../PatientPage';
import {InvoiceRender} from '../Rory_Component';
import Corona from './components/Corona_Component/Corona';

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
    // <Grid container direction="column" style={{ height: "90vh" }}>
    <Grid container direction="column" >
      {/* <Grid item style={{ height: "80vh" }}> */}
      <Grid item>
        {/* Content Home Page */}
        <Corona />
      </Grid>
      {/* <Grid item style={{ height: "10vh" }}> */}
      {/* <Grid item>
        <Pay />
      </Grid> */}
    </Grid>
  );
}

export { HomePage };

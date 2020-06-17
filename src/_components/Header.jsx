import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PatientPage } from "../PatientPage/PatientPage"
function Header() {
  const user = useSelector((state) => state.authentication.user);
  return (
    <Grid container id="headerGrid" direction="row" style={{ height: "10vh" }}>
      <Grid item xs={3}>
        <h1>Hi {user.firstName}!</h1>
      </Grid>
      <Grid item xs={7}>
        <Grid item>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </Button>
            <Button>
              <Link to="/patient" style={{ color: "white" }}>
                Invoice
                {PatientPage}
              </Link>
            </Button>
            <Button>
              <Link to="/labresults" style={{ color: "white" }}>
                Lab results
              </Link>
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid item xs={2} style={{ textAlign: "right" }}>
        <Button variant="contained" color="default">
          <Link to="/login">Logout</Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export { Header };

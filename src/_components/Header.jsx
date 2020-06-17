import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Grid container id="headerGrid" direction="row" style={{ height: "10vh" }}>
      <Grid item xs={3}></Grid>
      <Grid item xs={7}>
        <Grid item>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>
              <Link to="/" style={{ color: "White" }}>
                Home
              </Link>
            </Button>
            <Button>
              <Link to="/5" style={{ color: "White" }}>
                Two
              </Link>
            </Button>
            <Button>
              <Link to="/labresults" style={{ color: "White" }}>
                Lab results
              </Link>
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid item xs={2} style={{ textAlign: "right" }}>
        <Button variant="outlined">
          <Link to="/login">Logout</Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export { Header };

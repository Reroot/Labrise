import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button, Paper, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navStyles } from "../_styles/navbarstyle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Image from "material-ui-image";

function Header() {
  const useStyles = navStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper>
      <Grid
        container
        id="headerGrid"
        direction="row"
        className={useStyles.navBar}
      >
        <Grid container item xs={2}>
          <div style={{ width: "0%", height: "0%" }}>
            <Image
              src="../../res/LabRise_logo -- v2,  350px.png"
              style={{
                width: "210px",
                height: "55px",
              }}
            />
          </div>
        </Grid>
        <Grid container item xs={9}>
          <Grid container item>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
              fullWidth
            >
              <Button className={useStyles.navButton} component={Link} to="/">
                <Container className={useStyles.navButtonLink}>
                  <HomeIcon></HomeIcon>
                  Home
                </Container>
              </Button>

              {/* This button is for the Lab Report Viewer component */}
              <Button
                className={useStyles.navButton}
                component={Link}
                to="/labreports"
              >
                <Container className={useStyles.navButtonLink}>
                  <TocIcon />
                  Lab Reports
                </Container>
              </Button>
              {/* This button is for the Dashboard component */}
              <Button
                className={useStyles.navButton}
                component={Link}
                to="/dashboard"
              >
                <Container className={useStyles.navButtonLink}>
                  <TrendingUpIcon />
                  Dashboard
                </Container>
              </Button>

              <Button
                className={useStyles.navButton}
                component={Link}
                to="/patient"
              >
                <Container className={useStyles.navButtonLink}>
                  Invoice
                </Container>
              </Button>
              {/* <Button className={useStyles.navButton}>
                <Link to="/labresults" className={useStyles.navButtonLink}>
                  <TocIcon></TocIcon>
                  Lab results
                </Link>
              </Button> */}
              <Button
                className={useStyles.navButton}
                component={Link}
                to="/corona"
              >
                <Container className={useStyles.navButtonLink}>
                  Corona Tracker
                </Container>
              </Button>
              <Button
                className={useStyles.navButton}
                component={Link}
                to="/appointments"
              >
                <Container className={useStyles.navButtonLink}>
                  Appointments
                </Container>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid container item xs={1} className={useStyles.navProfile}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={useStyles.navProfileButton}
          >
            <AccountBoxIcon
              className={useStyles.accountBoxIcon}
            ></AccountBoxIcon>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/login">Logout</Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Paper>
  );
}

export { Header };

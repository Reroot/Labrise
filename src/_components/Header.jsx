import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navStyles } from "../_styles/navbarstyle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

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
        <Grid item xs={2}>
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
        <Grid item xs={9}>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
              fullWidth
            >
              <Button className={useStyles.navButton}>
                <Link to="/" className={useStyles.navButtonLink}>
                  <HomeIcon></HomeIcon>&nbsp;&nbsp;
                  Home
                </Link>
              </Button>


              {/* This button is for the Lab Report Viewer component */}
              <Button className={useStyles.navButton}>
                <Link to="/labreports" className={useStyles.navButtonLink}>
                  <TocIcon />&nbsp;&nbsp;
                  Lab Reports
                </Link>
              </Button>
              {/* This button is for the Dashboard component */}
              <Button className={useStyles.navButton}>
                <Link to="/dashboard" className={useStyles.navButtonLink}>
                  <TrendingUpIcon />&nbsp;&nbsp;
                  Dashboard
                </Link>
              </Button>
              
              
              <Button className={useStyles.navButton}>
                <Link to="/patient" className={useStyles.navButtonLink}>
                  Invoice
                </Link>
              </Button>
              {/* <Button className={useStyles.navButton}>
                <Link to="/labresults" className={useStyles.navButtonLink}>
                  <TocIcon></TocIcon>
                  Lab results
                </Link>
              </Button> */}
              <Button className={useStyles.navButton}>
                <Link to="/corona" className={useStyles.navButtonLink}>
                  Corona News Alerts
                </Link>
              </Button>
              <Button className={useStyles.navButton}>
                <Link to="/" className={useStyles.navButtonLink}>
                  Appointments
                </Link>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={1} className={useStyles.navProfile}>
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
              <Link to="/profile">Profile</Link>
            </MenuItem>
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

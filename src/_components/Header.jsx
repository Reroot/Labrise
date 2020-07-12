import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button, Paper } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "material-ui-image";
import { navStyles } from "../_styles/navbarstyle";

// Import some navigation bar picture icons
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountBoxIcon from "@material-ui/icons/AccountBox";


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
        justify="space-between"
        alignItems="center"
        className={useStyles.navBar}
      >
        
        {/* This is the LabRise logo.  It links to the Home Page. */}
        <Grid container item xs={2} className={useStyles.logo}>
          <div style={{ width: "100%", height: "100%" }}>
            {/* <div> */}
            <Link to="/" className={useStyles.logoLink}></Link>
            <Image
              src="../../res/LabRise_logo -- v2,  350px.png"
              aspectRatio={1024 / 1}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Grid>

        {/* This is the horizontal navigation bar. */}
        <Grid container item xs={9}>
          <ButtonGroup
            variant="contained"
            // color="primary"
            aria-label="contained primary button group"
            fullWidth
            className={useStyles.navButtonGroup}
            
          >
            {/* <Button className={useStyles.navButton} component={Link} to="/">
                < />&nbsp;
                Home
            </Button> */}
            <Button className={useStyles.navButton}>
              <Link to="/" className={useStyles.navButtonLink}>
                <HomeIcon />&nbsp;
                Home
              </Link>
            </Button>
            {/* This button is for the Lab Report Viewer component */}
            <Button className={useStyles.navButton}>
              <Link to="/labreports" className={useStyles.navButtonLink}>
                <TocIcon />&nbsp;
                Lab Reports
              </Link>
            </Button>
            
            {/* This button is for the Dashboard component */}
            <Button className={useStyles.navButton}>
              <Link to="/dashboard" className={useStyles.navButtonLink}>
                <TrendingUpIcon />&nbsp;
                Dashboard
              </Link>
            </Button>
            
            <Button className={useStyles.navButton}>
              <Link to="/corona" className={useStyles.navButtonLink}>
                <BubbleChartIcon />&nbsp;
                COVID-19
              </Link>
            </Button>

            <Button className={useStyles.navButton}>
              <Link to="/patient" className={useStyles.navButtonLink}>
                <AttachMoneyIcon />&nbsp;
                Invoices
              </Link>
            </Button>
            
            <Button className={useStyles.navButton}>
              <Link to="/appointments" className={useStyles.navButtonLink}>
                <ScheduleIcon />&nbsp;
                Appointments
              </Link>
            </Button>
          </ButtonGroup>
        </Grid>

        {/* This is the button for User Profile/Logout. */}
        <Grid
          container
          item
          xs={1}
          className={useStyles.navProfile}
          justify="center"
        >
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

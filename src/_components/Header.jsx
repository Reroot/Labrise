import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navStyles } from "../Style/navBarStyle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";

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
        <Grid item xs={3}></Grid>
        <Grid item xs={8}>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button>
                <Link to="/" className={useStyles.navButtonLink}></Link>
                <HomeIcon></HomeIcon>
                <div>Home</div>
              </Button>
              <Button>
                <Link to="/5" className={useStyles.navButtonLink}>
                  Two
                </Link>
              </Button>
              <Button>
                <Link
                  to="/labresults"
                  className={useStyles.navButtonLink}
                ></Link>
                <TocIcon></TocIcon>
                <div>Lab results</div>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={1} style={{ elevation: 1 }}>
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
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

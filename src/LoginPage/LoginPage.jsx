import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";
import Navbar from "./Navbar";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  const useStyles = makeStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      background: "#ff0000",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {},
  });

  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <div id="loginDiv" className={classes.paper}>
        <h2>Welcome to Labrise! Your Personal Health Assistant</h2>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <title>
          Please enter your log in or register into our Secure Portal
        </title>
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              id="userID"
              label="Username"
              value={username}
              onChange={handleChange}
              autoComplete="user"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              id="passwordID"
              label="Password"
              value={password}
              onChange={handleChange}
              type="password"
              autoComplete="current-password"
            />
            <div className="form-group">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {loggingIn && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Sign In
              </Button>
              <Grid item>
                <Link to="/register" className="btn btn-link">
                  {" Don't have a account? Sign up here!"}
                </Link>
              </Grid>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export { LoginPage };

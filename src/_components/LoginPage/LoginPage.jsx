import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { ThemeProvider } from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions/user.actions";
import { Paper } from '@material-ui/core';
import "./styles.css"
function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
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
    <Container maxWidth="xs" id="rcorners2">


      <div id="rounded-corners-gradient-borders" className={classes.paper} style={{backgroundImage: "linear-gradient(to bottom right, white, rgb(196, 180, 255,.5))", }}>
      <h2 id="loginText" style={{ color: 'darkBlue'}}>Welcome to Labrise! Your Personal Health Portal</h2>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {alert.message && <Alert severity="error">{alert.message}</Alert>}
        <title id="loginText">
          Please enter your log in or register into our Secure Portal
        </title>
          <br />
          <form name="form" onSubmit={handleSubmit} >
            <div className="form-group">
              <Paper elevation={24}>
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
                  autoFocus
                  />
              </Paper>
              <br />
              <Paper elevation={24}>
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
                  />
                </Paper>
              <br />
              <Paper elevation={24}>
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
              </Paper>
              <br />
              <Link to="/register" className="btn btn-link">
                {" Don't have an account? Sign up here!"}
              </Link>
            <br />
            </div>
          </form>
      </div>
    </Container>
  );
}

export { LoginPage };

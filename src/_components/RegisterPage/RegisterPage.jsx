import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions/user.actions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import ContactsIcon from "@material-ui/icons/Contacts";
import { Paper } from '@material-ui/core';

function RegisterPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target.value);
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.firstName && user.lastName && user.email && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
      <Container maxWidth="xs" >
    <div  style={{
        backgroundImage: "linear-gradient(to bottom right, white, rgb(196, 180, 255,.4))",
        width: "100%",
        alignContent: "center",
      }}
    >
        <h2 style={{ marginBottom: "0px" }}>
          Register
          <ContactsIcon style={{ fontSize: "3rem", marginLeft: "4.9rem" }} />
        </h2>
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Paper elevation={24}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstName"
              id="firstnameID"
              label="First Name"
              value={user.firstName}
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
              name="lastName"
              id="lastnameID"
              label="Last Name"
              value={user.lastName}
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
              name="email"
              id="emailID"
              label="E-mail Address"
              value={user.email}
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
              name="username"
              id="usernameID"
              label="Username"
              value={user.username}
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
              value={user.password}
              onChange={handleChange}
              autoFocus
              />
              </Paper>
              <br />
            <Paper elevation={24}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              {registering && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Register
            </Button>
            </Paper>
            <br />
            <Paper elevation={24}>
            <Button
              href="/login"
              fullWidth
              variant="contained"
              style={{ marginTop: ".5rem" }}
              >
              Cancel
            </Button>
            </Paper>
          </div>
        </form>
    </div>
      </Container>
  );
}

export { RegisterPage };

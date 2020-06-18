import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
function ProfilePage() {
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  // reset login status
  useEffect(() => {}, []);
  return (
    <Container maxWidth="xs">
      <title>Please enter your log in or register into our Secure Portal</title>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="username"
        id="userID"
        label="Username"
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
        type="password"
      />
    </Container>
  );
}

export { ProfilePage };

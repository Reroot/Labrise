import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { ProfileStyles } from "../Style/profilestyle";
function ProfilePage() {
  const useStyles = ProfileStyles();
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  // reset login status
  useEffect(() => {}, []);
  return (
    <Container maxWidth="xs">
      <title>Please enter your log in or register into our Secure Portal</title>
      <TextField
        variant="filled"
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        defaultValue="Username Here"
        name="username"
        id="userID"
        label="Username"
        autoFocus
        className={useStyles.textField}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        name="password"
        id="passwordID"
        label="Password"
        type="password"
        className={useStyles.textField}
      />
    </Container>
  );
}

export { ProfilePage };

import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { ProfileStyles } from "../Style/profilestyle";
import InputAdornment from "@material-ui/core/InputAdornment";
function ProfilePage() {
  const useStyles = ProfileStyles();
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  // reset login status
  useEffect(() => {}, []);
  return (
    <Container>
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
        name="firstName"
        id="firstNameID"
        label="First Name"
        type="text"
        className={useStyles.textField}
      />
      <TextField
        variant="outlined"
        margin="normal"
        name="lastName"
        id="lastNameID"
        label="Last Name"
        type="text"
        className={useStyles.textField}
      />
      <TextField
        variant="outlined"
        margin="normal"
        name="mobilePhone"
        id="mobilePhoneID"
        label="Mobile Phone"
        type="text"
        className={useStyles.textField}
      />
      <TextField
        variant="outlined"
        margin="normal"
        name="emailAddress"
        id="emailAddressID"
        label="Email Address"
        type="text"
        className={useStyles.textField}
      />
      <TextField
        label="Weight"
        id="filled-start-adornment"
        InputProps={{
          endAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
        variant="filled"
      />
    </Container>
  );
}

export { ProfilePage };

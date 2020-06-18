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
  let info = useSelector((state) => state.profileReducer.profileData);
  // reset login status
  console.log(info);
  console.log(info.pData.value[0]["firstname"]);
  useEffect(() => {}, []);
  return (
    <Container className={useStyles.container}>
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
        value={info.pData.value[0]["firstname"]}
        label="First Name"
        type="text"
        className={useStyles.textField}
        autoComplete="off"
      />
      <TextField
        variant="outlined"
        margin="normal"
        name="lastName"
        id="lastNameID"
        value={info.pData.value[0]["lastname"]}
        label="Last Name"
        type="text"
        autoComplete="off"
        className={useStyles.textField}
      />
      <TextField
        variant="outlined"
        margin="normal"
        name="mobilePhone"
        id="mobilePhoneID"
        value={info.pData.value[0]["mobilephone"]}
        label="Mobile Phone"
        type="text"
        autoComplete="off"
        className={useStyles.textField}
      />
      <TextField
        variant="outlined"
        margin="normal"
        name="emailAddress"
        id="emailAddressID"
        value={info.pData.value[0]["emailaddress1"]}
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
        value={info.pData.value[0]["new_weight"]}
        variant="filled"
        autoComplete="off"
      />
    </Container>
  );
}

export { ProfilePage };

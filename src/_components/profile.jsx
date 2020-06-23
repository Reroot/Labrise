import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { ProfileStyles } from "../Style/profilestyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import * as profileActions from "../_actions/profile-actions";

function ProfilePage() {
  const useStyles = ProfileStyles();
  const dispatch = useDispatch();
  let info = useSelector((state) => state.profileReducer.profileData);
  // reset login status
  console.log(info);
  useEffect(() => {
    dispatch(profileActions.readProfile());
  }, []);
  if (info && info.requestSuccessful) {
    return (
      <Container className={useStyles.container}>
        <Container>
          <h2>General Information</h2>
          <TextField
            variant="filled"
            margin="normal"
            name="firstName"
            id="firstNameID"
            defaultValue={info.pData.value[0]["firstname"]}
            label="First Name"
            InputProps={{
              readOnly: true,
            }}
            className={useStyles.textField}
            autoComplete="off"
          />
          <TextField
            variant="filled"
            margin="normal"
            name="lastName"
            id="lastNameID"
            defaultValue={info.pData.value[0]["lastname"]}
            label="Last Name"
            InputProps={{
              readOnly: true,
            }}
            autoComplete="off"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="mobilePhone"
            id="mobilePhoneID"
            defaultValue={info.pData.value[0]["mobilephone"]}
            label="Mobile Phone"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            autoComplete="off"
            className={useStyles.textField}
          />
          <TextField
            id="birthDate"
            label="Birth Date"
            type="date"
            defaultValue={info.pData.value[0]["new_birthdate"]}
            className={useStyles.textField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="filled"
            margin="normal"
            name="emailAddress"
            id="emailAddressID"
            defaultValue={info.pData.value[0]["emailaddress1"]}
            label="Email Address"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            className={useStyles.textField}
          />
          <TextField
            variant="filled"
            margin="normal"
            name="bloodType"
            id="bloodTypeID"
            defaultValue={
              info.pData.value[0][
                "new_bloodtype@OData.Community.Display.V1.FormattedValue"
              ]
            }
            label="Blood Type"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            className={useStyles.textField}
          />
          <TextField
            label="Weight"
            id="weight-filled-end-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
            defaultValue={info.pData.value[0]["new_weight"]}
            variant="filled"
            autoComplete="off"
            InputProps={{
              readOnly: true,
            }}
            className={useStyles.textField}
          />
          <TextField
            label="Height"
            id="height-filled-end-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="end">CM</InputAdornment>,
            }}
            defaultValue={info.pData.value[0]["new_height"]}
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
            autoComplete="off"
            className={useStyles.textField}
          />
        </Container>
        <Container>
          <h2>Address</h2>
          {console.log(info.pData.value)}
          <TextField
            variant="outlined"
            margin="normal"
            name="addressName"
            id="addressNameID"
            defaultValue={info.pData.value[0]["address1_name"]}
            label="Address"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressCity"
            id="addressCityID"
            defaultValue={info.pData.value[0]["address1_city"]}
            label="City"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressState"
            id="addressStateID"
            defaultValue={info.pData.value[0]["address1_stateorprovince"]}
            label="State"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressPostal"
            id="addressPostalID"
            defaultValue={info.pData.value[0]["address1_postalcode"]}
            label="Postal Code"
            type="text"
            className={useStyles.textField}
          />
        </Container>
      </Container>
    );
  } else {
    return "";
  }
}

export { ProfilePage };

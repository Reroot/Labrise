import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { ProfileStyles } from "../../_styles/profilestyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import * as profileActions from "../../_actions/profile-actions";

<<<<<<< HEAD:src/_components/profile.jsx
function ProfilePage(props) {
  console.log("props in profile page");
  console.log(props);
  const useStyles = ProfileStyles();
  const dispatch = useDispatch();
  let info = useSelector((state) => state.profileReducer.profileData);
  let info2 = useSelector((state) => state.authentication.user);
  // reset login status
  console.log("this is the selector for profile");
  console.log(info);
  console.log("this is the selector for authenticated user");
  console.log(info2);

  useEffect(() => {
    dispatch(profileActions.readProfile(info2["email"]));
  }, []);
  if (info && info.requestSuccessful) {
    return (
=======
function ProfilePage( {profileData} ) {
  // console.log("props in profile page");
  // console.log(props);
  const useStyles = ProfileStyles();
  
  // let info = useSelector((state) => state.profileReducer.profileData);
  // let info2 = useSelector((state) => state.authentication.user);
  // // reset login status
  // console.log("this is the selector for profile");
  // console.log(info);
  // console.log("this is the selector for authenticated user");
  // console.log(info2);

  // useEffect(() => {
  //   dispatch(profileActions.readProfile(info2["email"]));
  // }, []);

  let content = "";

  if(!profileData || profileData.requestPending){
    content = (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div> 
        </div>
    );
  }

  if (profileData && profileData.requestSuccessful) {
    console.log("profile data after successful load");
    console.log(profileData.pData);
    content = (
>>>>>>> 0a1b7df6d0979afdae319fa51784095c86273ec2:src/_components/Profile/profile.jsx
      <Container className={useStyles.container}>
        <Container>
          <h2>General Information</h2>
          <TextField
            variant="outlined"
            margin="normal"
            name="firstName"
            id="firstNameID"
            defaultValue={profileData.pData.value[0]["firstname"]}
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
            defaultValue={profileData.pData.value[0]["lastname"]}
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
            defaultValue={profileData.pData.value[0]["mobilephone"]}
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
            defaultValue={profileData.pData.value[0]["emailaddress1"]}
            label="Email Address"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="bloodType"
            id="bloodTypeID"
            defaultValue={
              profileData.pData.value[0][
                "new_bloodtype@OData.Community.Display.V1.FormattedValue"
              ]
            }
            label="Blood Type"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            label="Weight"
            id="weight-filled-end-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
            defaultValue={profileData.pData.value[0]["new_weight"]}
            variant="outlined"
            autoComplete="off"
            className={useStyles.textField}
          />
          <TextField
            label="Height"
            id="height-filled-end-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="end">CM</InputAdornment>,
            }}
            defaultValue={profileData.pData.value[0]["new_height"]}
            variant="outlined"
            autoComplete="off"
            className={useStyles.textField}
          />
        </Container>
        <Container>
          <h2>Address</h2>
          {console.log(profileData.pData.value)}
          <TextField
            id="birthDate"
            label="Birth Date"
            type="date"
            defaultValue={profileData.pData.value[0]["new_birthdate"]}
            className={useStyles.textField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressName"
            id="addressNameID"
            defaultValue={profileData.pData.value[0]["address1_name"]}
            label="Address"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressCity"
            id="addressCityID"
            defaultValue={profileData.pData.value[0]["address1_city"]}
            label="City"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressState"
            id="addressStateID"
            defaultValue={profileData.pData.value[0]["address1_stateorprovince"]}
            label="State"
            type="text"
            className={useStyles.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressPostal"
            id="addressPostalID"
            defaultValue={profileData.pData.value[0]["address1_postalcode"]}
            label="Postal Code"
            type="text"
            className={useStyles.textField}
          />
        </Container>
      </Container>
    );
  }

  if(profileData && profileData.requestFailed){
    content = 
    (
        <div className="alert alert-danger" role="alert">
            Error while loading profile data!
        </div>
    );
  }

  return(
    <div>
        {content}
    </div>
  );
}

export { ProfilePage };

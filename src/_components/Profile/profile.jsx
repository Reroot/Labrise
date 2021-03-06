import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { ProfileStyles } from "../../_styles/profilestyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import * as profileActions from "../../_actions/profile-actions";
import { Button } from "@material-ui/core";

// import React, { useEffect } from 'react';
import PropTypes from "prop-types";
// import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";

// import * as profileActions from '../../_actions/profile-actions';
// import { ProfilePage } from './profile';

const ProfilePage = ({ profileData }) => {
  const useStyles = ProfileStyles();
  const dispatch = useDispatch();
  const [textValues, setTextValues] = useState({});
  const [buttonDisable, setButtonDisable] = useState(true);

  // const dispatch = useDispatch();
  let userEmail = useSelector((state) => state.authentication.user);
  // let profileData = useSelector((state) => state.profileReducer.profileData);

  const handleTextFieldChange = (e) => {
    setButtonDisable(false);
    const { name, value } = e.target;
    setTextValues({
      ...textValues,
      [name]: value,
      ["contactid"]: profileData.pData.value[0]["contactid"],
      ["email"]: userEmail["email"],
    });
  };
  useEffect(() => {
    dispatch(profileActions.readProfile(userEmail["email"]));
  }, []);

  let content = "";

  if (!profileData || profileData.requestPending) {
    console.log("DATA FETCHING");
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (profileData && profileData.requestSuccessful === true) {
    console.log("DISPLAY DATA BEEP");
    let fDate;
    // if (profileData.pData.value[0]["new_birthdate"] != null) {
    //   const date = profileData.pData.value[0]["new_birthdate"].split("T");
    if (profileData.pData.value[0]["sstack_birthday"] != null) {
        const date = profileData.pData.value[0]["sstack_birthday"].split("T");
      fDate = date[0];
    } else {
      fDate = "";
    }
    content = (
      <Container className={useStyles.container}>
        <Container>
          <h2 className={useStyles.HeadingText}>General Information:</h2>
          <TextField
            variant="filled"
            margin="normal"
            name="firstName"
            id="firstNameID"
            defaultValue={profileData.pData.value[0]["firstname"]}
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
            defaultValue={profileData.pData.value[0]["lastname"]}
            label="Last Name"
            type="text"
            autoComplete="off"
            className={useStyles.textField}
          />
          <TextField
            name="birthDate"
            id="birthDate"
            label="Birth Date"
            type="date"
            defaultValue={fDate}
            className={useStyles.textField}
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
          {/* <TextField
            variant="filled"
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
            InputProps={{
              readOnly: true,
            }}
            className={useStyles.textField}
          /> */}
          <TextField
            label="Weight"
            id="weight-filled-end-adornment"
            name="weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              readOnly: true,
            }}
            // defaultValue={profileData.pData.value[0]["new_weight"]}
            defaultValue={profileData.pData.value[0]["sstack_weight"]}
            variant="filled"
            autoComplete="off"
            className={useStyles.textFieldAdornment}
          />
          <TextField
            label="Height"
            name="height"
            id="height-filled-end-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="end">CM</InputAdornment>,
              readOnly: true,
            }}
            // defaultValue={profileData.pData.value[0]["new_height"]}
            defaultValue={profileData.pData.value[0]["sstack_height"]}
            variant="filled"
            autoComplete="off"
            className={useStyles.textFieldAdornment}
          />
          <TextField
            variant="filled"
            margin="normal"
            name="emailAddress"
            id="emailAddressID"
            defaultValue={profileData.pData.value[0]["emailaddress1"]}
            label="Email Address"
            type="text"
            InputProps={{
              readOnly: true,
            }}
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
            placeholder="###-###-####"
            onChange={(e) => handleTextFieldChange(e)}
            className={useStyles.textField}
          />
        </Container>
        <Container>
          <h2 className={useStyles.HeadingText}>Address:</h2>
          <TextField
            variant="outlined"
            margin="normal"
            name="addressName"
            id="addressNameID"
            defaultValue={profileData.pData.value[0]["address1_name"]}
            label="Address"
            type="text"
            className={useStyles.textField}
            onChange={(e) => handleTextFieldChange(e)}
            autoComplete="off"
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
            onChange={(e) => handleTextFieldChange(e)}
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="addressState"
            id="addressStateID"
            defaultValue={
              profileData.pData.value[0]["address1_stateorprovince"]
            }
            label="State"
            type="text"
            className={useStyles.textField}
            onChange={(e) => handleTextFieldChange(e)}
            autoComplete="off"
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
            onChange={(e) => handleTextFieldChange(e)}
            autoComplete="off"
          />
        </Container>
        <Container className={useStyles.buttonContainer}>
          <Button
            disabled={buttonDisable}
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(profileActions.updateProfile(textValues));
              setButtonDisable(true);
            }}
          >
            Save
          </Button>
        </Container>
      </Container>
    );
  }

  if (profileData && profileData.requestFailed) {
    content = (
      <div className="alert alert-danger" role="alert">
        Error while loading profile data!
      </div>
    );
  }

  return <div>{content}</div>;
};

// function mapStateToProps(state){
//   return {
//       profileData: state.profileReducer.profileData
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//       actions: bindActionCreators(profileActions, dispatch)
//   }
// }

// ProfilePage.propTypes = {
//   actions: PropTypes.object
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(ProfilePage);

// export { ProfilePage };
export default ProfilePage;

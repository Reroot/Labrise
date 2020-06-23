import axios from "axios";

import { profileConstants } from "../_constants";

import { adalApiFetch } from "../Config/adalConfig";

/// read profile Data
export const readProfile = () => {
  // header info for the fetchUrl
  // add TIMER HEADER
  let config = {
    method: "get",
    "OData-MaxVersion": 4.0,
    "OData-Version": 4.0,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    headers: {
      Prefer: "odata.include-annotations=*",
    },
  };
  return (dispatch) => {
    dispatch(_readProfileStarted);
    ///////////Your api azure function here
    adalApiFetch(
      axios,
      "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=firstname,mobilephone,lastname,new_weight,emailaddress1,new_bloodtype,new_birthdate,new_height,address1_name,address1_city,address1_stateorprovince,address1_postalcode,&$filter=contains(emailaddress1,(%27will.cao@smoothstack.com%27))",
      config
    )
      .then((res) => {
        dispatch(_readProfileSuccess(res));
      })
      .catch((error) => {
        console.log(error);
        dispatch(_readProfileFailed(error));
      });
  };
};

const _readProfileSuccess = (res) => {
  return {
    type: profileConstants.GET_SUCCESS,
    data: res.data,
  };
};

const _readProfileFailed = (error) => {
  return {
    type: profileConstants.GET_FAILURE,
    error,
  };
};

const _readProfileStarted = () => {
  return {
    type: profileConstants.GET_REQUEST,
  };
};

export const updateProfile = () => {
  // post profile data to dynamics
  //change to put
  let config = {
    method: "put",
    "OData-MaxVersion": 4.0,
    "OData-Version": 4.0,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    headers: {
      Prefer: "odata.include-annotations=*",
    },
  };
  return (dispatch) => {
    dispatch(_updateProfileStarted);
    adalApiFetch(
      axios,
      "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=firstname,mobilephone,lastname,new_weight,emailaddress1,new_bloodtype,new_birthdate,new_height,address1_name,address1_city,address1_stateorprovince,address1_postalcode,&$filter=contains(emailaddress1,(%27will.cao@smoothstack.com%27))",
      config
    )
      .then((res) => {
        console.log("Put success");
        dispatch(_updateProfileSuccess(res));
      })
      .catch((error) => {
        console.log(error);
        console.log("Put error");
        dispatch(_updateProfileFailed(error));
      });
  };
};

const _updateProfileSuccess = (res) => {
  return {
    type: profileConstants.UPDATE_SUCCESS,
  };
};

const _updateProfileFailed = (error) => {
  return {
    type: profileConstants.UPDATE_FAILURE,
    error,
  };
};

const _updateProfileStarted = () => {
  return {
    type: profileConstants.UPDATE_REQUEST,
  };
};

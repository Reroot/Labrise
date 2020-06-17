import axios from "axios";

import { homeConstants } from "../_constants";

import { adalApiFetch } from "../Config/adalConfig";

export const readProfile = () => {
  // header info for the fetchUrl
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
    console.log("started action");
    dispatch(_readProfileStarted);
    ///////////Your api azure function here
    adalApiFetch(
      axios,
      "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=firstname,mobilephone,lastname&$filter=contains(emailaddress1,(%27will.cao@smoothstack.com%27))",
      config
    )
      .then((res) => {
        console.log("success action");
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
    type: homeConstants.GET_SUCCESS,
    data: res.data,
  };
};

const _readProfileFailed = (error) => {
  return {
    type: homeConstants.GET_FAILURE,
    error,
  };
};

const _readProfileStarted = () => {
  return {
    type: homeConstants.GET_REQUEST,
  };
};

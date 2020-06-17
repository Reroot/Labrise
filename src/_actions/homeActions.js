import axios from "axios";

import { homeConstants } from "../_constants";

import { adalApiFetch } from "../Config/adalConfig";

export const readProfile = () => {
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
    dispatch(_readBookStarted());
    ///////////Your api azure function here
    adalApiFetch(
      axios,
      "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=firstname,mobilephone&$top=10",
      config
    )
      .then((res) => {
        dispatch(_readBookSuccess(res));
      })
      .catch((error) => {
        console.log(error);
        dispatch(_readBookFailed(error));
      });
  };
};

const _readBookSuccess = (res) => {
  return {
    type: READ_BOOKS_SUCCESFUL,
    data: res.data,
  };
};

const _readBookFailed = (error) => {
  return {
    type: READ_BOOKS_FAILURE,
    error,
  };
};

const _readBookStarted = () => {
  return {
    type: READ_BOOKS_PENDING,
  };
};

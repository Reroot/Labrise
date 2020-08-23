/******************************************************************************
These are the Action types for reading the Lab Result records from Dynamics
******************************************************************************/
import axios from 'axios'
import { adalApiFetch } from "../_adalconfig/adalConfig";
import { labResults_Constants } from '../_constants/labResults-Constants';


// Define the Action types for reading the Lab Results
export const readLabResults = (patientName) => {
  
  // Configure the API "get" request
  const config = {
    method: "get",
    "OData-MaxVersion": 4.0,
    "OData-Version": 4.0,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    headers: {
      Prefer: "odata.include-annotations=*",
    },
  };
  
  // Define the Action cycle of the data retrieval event
  return dispatch => {
    
    // Initiate the Action cycle....data retrieval has been started
    dispatch( _readLabResultsStarted() );

    // Construct the URL for the API call

    //const endpoint = "https://notsuave.api.crm.dynamics.com/api/data/v9.1/";
    const endpoint = "https://bumpystack.api.crm.dynamics.com/api/data/v9.1/";
    // const entity = "wc_labtestresults";
    const entity = "sstack_testresults";
    const fields = [
      // Note:  The "wc_" prefix is the Microsoft Dynamics publisher prefix for Will Cao's custom solution
      //   ****This publisher prefix is specific to this particular custom solution****
      // "sstack_hypotheticalpatient",

      "sstack_hypotheticalpatient",
      "sstack_orderdate",
      "sstack_hypotheticaldoctor",
      "sstack_testname",
      "sstack_min",
      "sstack_max",
      "sstack_value",
      "sstack_flag",
      "sstack_units",
      "sstack_scaledvalue"
    ].join();
    const criteria = "contains(sstack_hypotheticalpatient,(%27" + patientName + "%27))";
    const querystring = "?$select=" + fields + "&$filter=" + criteria;
    const url = endpoint + entity + querystring;
    
    // Perform the API "get" request
    adalApiFetch(
      axios,
      url,
      config
    )
    // Upon successful resolution of the promise....
    .then(result => {
      dispatch( _readLabResultsSuccess(result) );
    })
    // Upon failed resolution of the promise....
    .catch( (error) => {
      console.log(error);
      dispatch( _readLabResultsFailed(error) );
    });
  };
};

// Action type for status:  Pending
const _readLabResultsStarted = () => {
  return {
    type:  labResults_Constants.READ_LABRESULTS_PENDING
  };
};

// Action type for status:  Success
const _readLabResultsSuccess = (result) => {
  return {
    type:  labResults_Constants.READ_LABRESULTS_SUCCESS,
    data:  result.data
  };
};

// Action type for status:  Failure
const _readLabResultsFailed = (error) => {
  return {
    type:  labResults_Constants.READ_LABRESULTS_FAILURE,
    error
  };
};

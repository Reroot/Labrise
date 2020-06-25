import axios from 'axios'

import { READ_PATINFO_SUCCESFUL, READ_PATINFO_FAILURE, READ_PATINFO_PENDING} from '../_constants/patEventConstants';
import { adalApiFetch } from "../_adalConfig/adalConfig";

export const readPatInfo = () => {

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
  return dispatch => {
        dispatch(_readPatInfoStarted);
        ///////////Your api azure function here
        adalApiFetch(
          axios,
          "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=wc_appointmentdate,firstname,lastname&$filter=wc_appointmentdate%20ne%20null",//cr480_appointmentdate
          config
        )
          .then((res) => {
            console.log("success action");
            dispatch(_readPatInfoSuccess(res));
          })
          .catch((error) => {
            console.log(error);
            dispatch(_readPatInfoFailed(error));
          });
      }


};




const _readPatInfoSuccess = (res) => {
    //console.log("debug:" +res.data[1]);
    return {
        type: READ_PATINFO_SUCCESFUL,
        data:  res.data
    };
}

const _readPatInfoFailed = (error) => {
    return {
        type: READ_PATINFO_FAILURE,
        error  
    };
}

const _readPatInfoStarted = () => {
    return {
        type: READ_PATINFO_PENDING
    };
}


/////////////






// const updateModalData= ()=> {
  
// }
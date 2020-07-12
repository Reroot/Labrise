import axios from 'axios'

import { READ_BEETLEINFO_SUCCESSFUL, READ_BEETLEINFO_FAILURE, READ_BEETLEINFO_PENDING} from '../_constants/beetleConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readBeetleInfo = () => {

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
        dispatch(_readBeetleInfoStarted);
        ///////////Your api azure function here
        adalApiFetch(
          axios,
          "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_appointmentdate&$filter=_wc_patient_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8",//cr480_appointmentdate
          config
        )
          .then((res) => {
            //console.log("success actiondqdqdq");
            dispatch(_readBeetleInfoSuccess(res));
          })
          .catch((error) => {
            console.log(error);
            dispatch(_readBeetleInfoFailed(error));
          });
      }


};




const _readBeetleInfoSuccess = (res) => {
    //console.log("debug:" +res.data[1]);
    return {
        type: READ_BEETLEINFO_SUCCESSFUL,
        data:  res.data
    };
}

const _readBeetleInfoFailed = (error) => {
    return {
        type: READ_BEETLEINFO_FAILURE,
        error  
    };
}

const _readBeetleInfoStarted = () => {
    return {
        type: READ_BEETLEINFO_PENDING
    };
}

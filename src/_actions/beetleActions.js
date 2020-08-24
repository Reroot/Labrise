import axios from 'axios'

import { READ_BEETLEINFO_SUCCESSFUL, READ_BEETLEINFO_FAILURE, READ_BEETLEINFO_PENDING} from '../_constants/beetleConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readBeetleInfo = (cid) => {
  console.log(cid);

  // let theString= "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=cr480_appointmentdate&$filter=_parentcontactid_value%20eq%20";
  let theString= "https://bumpystack.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=sstack_dateofappointment,name&$filter=_parentcontactid_value%20eq%20";
  // let theString= "https://bumpystack.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=sstack_appointmentdate&$filter=sstack_patient%20eq%20";
  let xString=theString + "{" + cid + "}";

  xString+="%20and%20sstack_dateofappointment%20ne%20null"

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

        adalApiFetch(
          axios,
          xString,
          config
        )
          .then((res) => {

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



//   https://notsmooth.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=cr480_appointmentdate&$filter=_parentcontactid_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8
import axios from 'axios'

import { READ_SHELLINFO_SUCCESSFUL, READ_SHELLINFO_FAILURE, READ_SHELLINFO_PENDING} from '../_constants/shellConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readShellInfo = (data) => {

  let theDatesX=data.dates.slice();
  // let theString="https://bumpystack.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=cr480_appointmentdate&$filter=_parentcontactid_value%20eq%20";
  let theString="https://bumpystack.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=sstack_dateofappointment&$filter=_sstack_patients_value%20eq%20";
  theString+=data.cid;
  let x=0;

  if(data.dates!=undefined){

    for(let i=0;i<theDatesX.length;i++){

      theDatesX[i]=theDatesX[i].replace(/['"]+/g, '');
       if(i==x&&theDatesX[i]!="x"){
         theString+="%20and%20sstack_dateofappointment%20eq%20"+theDatesX[i];
       }else if(theDatesX[i]=="x"){
         if(i==x){
           x++;
         }

       }else{
        theString+="%20or%20sstack_dateofappointment%20eq%20"+theDatesX[i];
      }
      
    }
  }

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
        dispatch(_readShellInfoStarted);

        adalApiFetch(
          axios,
          theString,
          config
        )
          .then((res) => {
            console.log("success action");
            dispatch(_readShellInfoSuccess(res));
          })
          .catch((error) => {
            console.log(error);
            dispatch(_readShellInfoFailed(error));
          });
      }


};




const _readShellInfoSuccess = (res) => {
    return {
        type: READ_SHELLINFO_SUCCESSFUL,
        data:  res.data
    };
}

const _readShellInfoFailed = (error) => {
    return {
        type: READ_SHELLINFO_FAILURE,
        error  
    };
}

const _readShellInfoStarted = () => {
    return {
        type: READ_SHELLINFO_PENDING
    };
}
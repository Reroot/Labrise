import axios from 'axios'

import { READ_SHELLINFO_SUCCESSFUL, READ_SHELLINFO_FAILURE, READ_SHELLINFO_PENDING} from '../_constants/shellConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readShellInfo = (dates) => {
  let theDatesX=dates.slice();
  let theString="https://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_appointmentdate&$filter=_wc_patient_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8";
  let x=0;

  if(dates!=undefined){

    for(let i=0;i<theDatesX.length;i++){

      theDatesX[i]=theDatesX[i].replace(/['"]+/g, '');
      console.log("fuck"+theDatesX[i]);
       if(i==x&&theDatesX[i]!="x"){
         theString+="%20and%20wc_appointmentdate%20eq%20"+theDatesX[i];
       }else if(theDatesX[i]=="x"){
         if(i==x){
           x++;
         }

       }else{
        theString+="%20or%20wc_appointmentdate%20eq%20"+theDatesX[i];
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
        ///////////Your api azure function here
        adalApiFetch(
          axios,
          theString,//cr480_appointmentdate
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
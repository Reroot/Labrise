import axios from 'axios'

import { READ_SHELLINFO_SUCCESSFUL, READ_SHELLINFO_FAILURE, READ_SHELLINFO_PENDING} from '../_constants/shellConstants';
import { adalApiFetch } from "../_adalConfig/adalConfig";

export const readShellInfo = (dates) => {
  //console.log("in shell actions"+JSON.stringify(dates));
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
         //console.log("x string called")
       }else{
        theString+="%20or%20wc_appointmentdate%20eq%20"+theDatesX[i];
      }
      
      //console.log("fuck this "+"%20or%20wc_appointmentdate%20eq%20"+theDatesX[i]);
    }
    //console.log("heres is the string "+theString);
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
    //console.log("debug:" +res.data[1]);
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


// import axios from 'axios'

// import { READ_SHELLINFO_SUCCESSFUL, READ_SHELLINFO_FAILURE, READ_SHELLINFO_PENDING} from '../_constants/shellConstants';

// export const readShellInfo = () => {

//     console.log("in actkon")

//   return dispatch => {
//       console.log("homosexuals are the people of the earth");
//       dispatch(_readShellInfoStarted());

//       return axios.get(`http://www.mocky.io/v2/5daca80c30000092002987ad`)
//       .then(res => {
//           dispatch(_readShellInfoSuccess(res));
//       })
//       .catch( (error) => {
//           console.log(error);
//           dispatch(_readShellInfoFailed(error));
//       });


//   };
// }

// const _readShellInfoSuccess = (res) => {
//     return {
//         type: READ_SHELLINFO_SUCCESSFUL,
//         data:  res.data
//     };
// }

// const _readShellInfoFailed = (error) => {
//     return {
//         type: READ_SHELLINFO_FAILURE,
//         error  
//     };
// }

// const _readShellInfoStarted = () => {
//     return {
//         type: READ_SHELLINFO_PENDING
//     };
// }//base api call https://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_appointmentdate&$filter=_wc_patient_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8
//just dates based on patient idhttps://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_appointmentdate&$filter=_wc_patient_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8

//https://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_appointmentdate,_wc_doctor_value,_wc_patient_value,wc_name,wc_totalcholesterolmin,wc_totalcholesterolvalue,wc_totalcholesterolmax,wc_totalcholesterolflag,wc_triglyceridesmin,wc_triglyceridesmax,wc_triglyceridesflag,wc_triglyceridesvalue,wc_sodiummin,wc_sodiummax,wc_sodiumflag,wc_sodiumvalue,wc_redbloodcellmin,wc_redbloodcellmax,wc_redbloodcellflag,wc_redbloodcellvalue,wc_whitebloodcellmin,wc_whitebloodcellmax,wc_whitebloodcellflag,wc_whitebloodcellvalue,wc_plateletmin,wc_plateletmax,wc_plateletflag,wc_plateletvalue,wc_glucosemin,wc_glucosemax,wc_glucoseflag,wc_glucosevalue&$filter=_wc_patient_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8
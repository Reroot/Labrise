import axios from 'axios'

import { READ_PATINFO_SUCCESFUL, READ_PATINFO_FAILURE, READ_PATINFO_PENDING} from '../_constants/patEventConstants';
import { adalApiFetch } from "../_adalConfig/adalConfig";

export const readPatInfo = (data) => {
  let theString="https://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_appointmentdate,_wc_doctor_value,_wc_patient_value,wc_name,wc_totalcholesterolmin,wc_totalcholesterolvalue,wc_totalcholesterolmax,wc_totalcholesterolflag,wc_triglyceridesmin,wc_triglyceridesmax,wc_triglyceridesflag,wc_triglyceridesvalue,wc_sodiummin,wc_sodiummax,wc_sodiumflag,wc_sodiumvalue,wc_redbloodcellmin,wc_redbloodcellmax,wc_redbloodcellflag,wc_redbloodcellvalue,wc_whitebloodcellmin,wc_whitebloodcellmax,wc_whitebloodcellflag,wc_whitebloodcellvalue,wc_plateletmin,wc_plateletmax,wc_plateletflag,wc_plateletvalue,wc_glucosemin,wc_glucosemax,wc_glucoseflag,wc_glucosevalue&$filter=_wc_patient_value%20eq%205ab5efc4-15bb-ea11-a812-000d3a58fef8%20and%20wc_appointmentdate%20eq%201997-10-23T04:00:00Z"//wc_appointmentdate%20ne%20null"
  //console.log("xButtonValue: "+data.buttonValue);
  let start= ((data.buttonValue-1)*data.perLoad);
  let end=start+data.perLoad;
  if (end>data.dates.length){
    end=data.dates.length;
  }
  //console.log(start)
  //console.log(end)
  for(let i=start;i<end;i++){
    //console.log("fqwefsadqedweq"+ data.dates[i])
    theString+="%20or%20wc_appointmentdate%20eq%20"+data.dates[i];
  }
  console.log("xsxsxsxc"+theString);
  //if(data.)
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
          theString,//cr480_appointmentdate
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
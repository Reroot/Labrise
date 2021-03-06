import axios from 'axios'

import { READ_MODALDATA_SUCCESFUL, READ_MODALDATA_FAILURE, READ_MODALDATA_PENDING, UPDATE_MODAL_DATA_STRING} from '../_constants/modalDataConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readModalDataInfo = (data) => {//default nonsense value
    let number='';
    let filter='';
    let aCid='';
    
    if(data!=undefined){
         number=data.date;
         filter=number;
         aCid=data.cid
        filter=filter.replace(/['"]+/g, '');
    }
    // let importantString="https://notsmooth.api.crm.dynamics.com/api/data/v9.1/sstack_labreports/?$select=sstack_appointmentdate,_sstack_doctor_value,_sstack_patient_value,sstack_name,sstack_totalcholesterolmin,sstack_totalcholesterolvalue,sstack_totalcholesterolmax,sstack_totalcholesterolflag,sstack_triglyceridesmin,sstack_triglyceridesmax,sstack_triglyceridesflag,sstack_triglyceridesvalue,sstack_sodiummin,sstack_sodiummax,sstack_sodiumflag,sstack_sodiumvalue,sstack_redbloodcellmin,sstack_redbloodcellmax,sstack_redbloodcellflag,sstack_redbloodcellvalue,sstack_whitebloodcellmin,sstack_whitebloodcellmax,sstack_whitebloodcellflag,sstack_whitebloodcellvalue,sstack_plateletmin,sstack_plateletmax,sstack_plateletflag,sstack_plateletvalue,wc_glucosemin,wc_glucosemax,wc_glucoseflag,wc_glucosevalue&$filter=wc_appointmentdate%20eq%20"//+2020-06-06T04:00:00Z
    let importantString="https://bumpystack.api.crm.dynamics.com/api/data/v9.1/sstack_labreports/?$select=sstack_appointmentdate,_sstack_patient_value,sstack_name,sstack_totalcholesterolmin,sstack_totalcholesterolvalue,sstack_totalcholesterolmax,sstack_totalcholesterolflag,sstack_triglyceridemin,sstack_triglyceridemax,sstack_triglycerideflag,sstack_triglyceridevalue,sstack_sodiummin,sstack_sodiummax,sstack_sodiumflag,sstack_sodiumvalue,sstack_redbloodcellmin,sstack_redbloodcellmax,sstack_redbloodcellflag,sstack_redbloodcellvalue,sstack_whitebloodcellmin,sstack_whitebloodcellmax,sstack_whitebloodcellflag,sstack_whitebloodcellvalue,sstack_plateletmin,sstack_plateletmax,sstack_plateletflag,sstack_plateletvalue&$filter=sstack_appointmentdate%20eq%20"//+2020-06-06T04:00:00Z
    //https://notsmooth.api.crm.dynamics.com/api/data/v9.1/wc_labreports/?$select=wc_name,wc_totalcholesterolmin,wc_totalcholesterolvalue,wc_totalcholesterolmax,wc_totalcholesterolflag,wc_triglyceridesmin,wc_triglyceridesmax,wc_triglyceridesflag,wc_triglyceridesvalue,wc_sodiummin,wc_sodiummax,wc_sodiumflag,wc_sodiumvalue,wc_redbloodcellmin,wc_redbloodcellmax,wc_redbloodcellflag,wc_redbloodcellvalue,wc_whitebloodcellmin,wc_whitebloodcellmax,wc_whitebloodcellflag,wc_whitebloodcellvalue,wc_plateletmin,wc_plateletmax,wc_plateletflag,wc_plateletvalue,wc_glucosemin,wc_glucosemax,wc_glucoseflag,wc_glucosevalue&$filter=wc_appointmentdate%20eq%20//starrting url
    let theString=importantString+filter;//
    theString+="%20and%20_sstack_patient_value%20eq%20"+aCid;
    //let importantStringx=importantString+number;//junk


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
        dispatch(_readModalDataStarted);
        ///////////Your api azure function here
        adalApiFetch(
          axios,
          theString,//cr480_appointmentdate
          config
        )
          .then((res) => {
            console.log("success action");
            dispatch(_readModalDataSuccess(res));
          })
          .catch((error) => {
            console.log(error);
            dispatch(_readModalDataFailed(error));
          });
      }
}




const _readModalDataSuccess = (res) => {
    return {
        type: READ_MODALDATA_SUCCESFUL,
        data:  res.data
    };
}

const _readModalDataFailed = (error) => {
    return {
        type: READ_MODALDATA_FAILURE,
        error  
    };
}

const _readModalDataStarted = () => {
    return {
        type: READ_MODALDATA_PENDING
    };
}
export const updateModalDataString = (dataString) => {
    return{
        type: UPDATE_MODAL_DATA_STRING,
        dataString
        
    }
}
export const rModalVis= vis =>({
    type: 'R_MODAL_VIS',
    vis
   })
   
   export const RModalVisSt ={
     BLOCK:'block',
     NONE:'none'
   }
   
   export const R_MODAL_VIS='R_MODAL_VIS';


/////////////






// const updateModalData= ()=> {
  
// }//old value:https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=firstname,mobilephone,lastname,wc_appointmentdate&$filter=wc_appointmentdate%20eq%20
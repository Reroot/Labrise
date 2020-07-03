import axios from 'axios'

import { READ_MODALDATA_SUCCESFUL, READ_MODALDATA_FAILURE, READ_MODALDATA_PENDING, UPDATE_MODAL_DATA_STRING} from '../_constants/modalDataConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readModalDataInfo = (number) => {//default nonsense value
    //console.log(number+"this is the number"+(number=="1"))
    //let theNumber=number;
    //let importantString="";//2020-12-17T05:00:00Z//other date
    let filter=number//.replace(/['"]+/g, '')//crba3_resultname filter by result name=R-1018, id should be 4a8124cd-11a1-ea11-a813-000d3a58fef8 
    if(filter!=undefined){
        filter=filter.replace(/['"]+/g, '');
    }
    let importantString="https://notsmooth.api.crm.dynamics.com/api/data/v9.1/contacts/?$select=firstname,mobilephone,lastname,wc_appointmentdate&$filter=wc_appointmentdate%20eq%20"//+2020-06-06T04:00:00Z

    let theString=importantString+filter;//
    console.log("the call is this right here:"+theString)
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
    //console.log("debug:"+JSON.stringify(res));
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
  
// }
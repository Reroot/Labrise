import axios from 'axios'

import { READ_PATINFO_SUCCESFUL, READ_PATINFO_FAILURE, READ_PATINFO_PENDING} from '../_constants/patEventConstants';
import { adalApiFetch } from "../_adalconfig/adalConfig";

export const readPatInfo = (theData) => {//needs cid
  let data=theData.dateData;

  let cid=theData.cid;
  let theString="https://notsmooth.api.crm.dynamics.com/api/data/v9.1/opportunities/?$select=cr480_appointmentdate,new_reasonfortesting&$filter=_parentcontactid_value%20eq%20"
  theString+=cid;

  let start= ((data.buttonValue-1)*data.perLoad);
  let end=start+data.perLoad;

  if (end>data.dates.length){
    end=data.dates.length;
  }

  for(let i=start;i<end;i++){

    if(i==start){
      theString+= "%20and%20cr480_appointmentdate%20eq%20" + data.dates[i];
    }else{
      theString+= "%20or%20cr480_appointmentdate%20eq%20" + data.dates[i];
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
        dispatch(_readPatInfoStarted);

        adalApiFetch(
          axios,
          theString,
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



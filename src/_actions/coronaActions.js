import axios from 'axios'

import { READ_CORONA_SUCCESFUL, READ_CORONA_FAILURE, READ_CORONA_PENDING} from '../_constants/corona.constants';

export const readCoronaData = (params) => {
  return dispatch => {
      dispatch(_readCoronaDataStarted());

      let first = "";
      let last = "";
      
      if(!params['state'] || params['state'] == "US"){
        first = "https://covidtracking.com/api/v1/us/";
      }else{
        first = "https://covidtracking.com/api/v1/states/" + params['state'].toLowerCase() + "/";
      }

      if(!params['date']){
        last = "current.json";
      }else{
        last = params['date'] + ".json";
      }

      let url = first + last;

      return axios.get(url)
      .then(res => {
          dispatch(_readCoronaDataSuccess(res));
      })
      .catch( (error) => {
          console.log(error);
          dispatch(_readCoronaDataFailed(error));
      });
  };
}

const _readCoronaDataSuccess = (res) => {
    console.log("corona data request successful");
    console.log(res.data);
    return {
        type: READ_CORONA_SUCCESFUL,
        data:  res.data
    };
}

const _readCoronaDataFailed = (error) => {
    return {
        type: READ_CORONA_FAILURE,
        error  
    };
}

const _readCoronaDataStarted = () => {
    return {
        type: READ_CORONA_PENDING
    };
}
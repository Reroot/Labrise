import axios from 'axios'

import { READ_CORONA_STATE_SUCCESSFUL, READ_CORONA_STATE_FAILURE, READ_CORONA_STATE_PENDING} from '../_constants/corona.state.constants';

export const readCoronaStateData = (params) => {
  return dispatch => {
      dispatch(_readCoronaStateDataStarted());

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
          dispatch(_readCoronaStateDataSuccess(res));
      })
      .catch( (error) => {
          console.log(error);
          dispatch(_readCoronaStateDataFailed(error));
      });
  };
}

const _readCoronaStateDataSuccess = (res) => {
    console.log("corona state data request successful");
    console.log(res.data);
    return {
        type: READ_CORONA_STATE_SUCCESSFUL,
        data:  res.data
    };
}

const _readCoronaStateDataFailed = (error) => {
    return {
        type: READ_CORONA_STATE_FAILURE,
        error  
    };
}

const _readCoronaStateDataStarted = () => {
    return {
        type: READ_CORONA_STATE_PENDING
    };
}
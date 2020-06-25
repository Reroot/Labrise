import { READ_CORONA_SUCCESFUL, READ_CORONA_PENDING, READ_CORONA_FAILURE } from '../_constants/corona.constants';

export default function coronaReducer(state = {}, action) {
  switch (action.type) {
    case READ_CORONA_SUCCESFUL:
      return {...state, coronaData: { corona: action.data, requestSucessful: true } };
    case READ_CORONA_PENDING:
      return {...state, coronaData: {requestPending: true } };
    case READ_CORONA_FAILURE:  
      return {...state, coronaData: { requestFailed: true } };
    default:
      return state;
  }
}

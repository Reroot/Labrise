import { READ_PATINFO_SUCCESFUL, READ_PATINFO_PENDING, READ_PATINFO_FAILURE } from '../_constants/patEventConstants';

export default function patEventReducer(state = {}, action) {
  //console.log("patEventReducer"+action);
  switch (action.type) {
    case READ_PATINFO_SUCCESFUL:
      return {...state, patInfoData: { patInfo: action.data, requestSucessful: true } };
    case READ_PATINFO_PENDING:
      return {...state, patInfoData: {requestPending: true } };
    case READ_PATINFO_FAILURE:  
      return {...state, patInfoData: { requestFailed: true } };
    default:
      return state;
  }
}
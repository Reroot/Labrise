import { READ_BEETLEINFO_SUCCESSFUL, READ_BEETLEINFO_PENDING, READ_BEETLEINFO_FAILURE } from '../_constants/beetleConstants';

export default function beetleReducer(state = {}, action) {
  //console.log("patEventReducer"+action);
  switch (action.type) {
    case READ_BEETLEINFO_SUCCESSFUL:
      return {...state, beetleInfoData: { beetleInfo: action.data, requestSucessful: true } };
    case READ_BEETLEINFO_PENDING:
      return {...state, beetleInfoData: {requestPending: true } };
    case READ_BEETLEINFO_FAILURE:  
      return {...state, beetleInfoData: { requestFailed: true } };
    default:
      return state;
  }
}
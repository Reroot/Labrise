import { READ_SHELLINFO_SUCCESSFUL, READ_SHELLINFO_PENDING, READ_SHELLINFO_FAILURE } from '../_constants/shellConstants';

export default function shellReducer(state = {}, action) {
  //console.log("patEventReducer"+action);
  switch (action.type) {
    case READ_SHELLINFO_SUCCESSFUL:
      return {...state, shellInfoData: { shellInfo: action.data, requestSucessful: true } };
    case READ_SHELLINFO_PENDING:
      return {...state, shellInfoData: {requestPending: true } };
    case READ_SHELLINFO_FAILURE:  
      return {...state, shellInfoData: { requestFailed: true } };
    default:
      return state;
  }
}
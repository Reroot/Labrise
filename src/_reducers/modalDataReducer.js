import { READ_MODALDATA_SUCCESFUL, READ_MODALDATA_PENDING, READ_MODALDATA_FAILURE } from '../_constants/modalDataConstants';

export default function modalDataReducer(state={}, action) {
  //console.log("patEventReducer"+action);
  switch (action.type) {
    case READ_MODALDATA_SUCCESFUL:
      //console.log("yoyoyoyoy"+JSON.stringify(action.data))
      return {...state, modalData: { modalData: action.data, requestSucessful: true } };
    case READ_MODALDATA_PENDING:
      return {...state, modalData: {requestPending: true } };
    case READ_MODALDATA_FAILURE:  
      return {...state, modalData: { requestFailed: true } };
    /*case UPDATE_MODAL_DATA_STRING:
      return {...state,dataString: action.dataString}*/
    default:
      return state;
  }
}
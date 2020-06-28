/*****************************************************************************
This is the Reducer for handling the Action types of reading Lab Results
*****************************************************************************/
import { labResults_Constants } from '../_constants/labResults-Constants';


// Channel each Action type to the relevant section of the Store/State
export default function labResults_Reducer(state = {}, action) {
  switch (action.type) {
    
    // Upon occurrence of Action type:  read Pending
    case labResults_Constants.READ_LABRESULTS_PENDING:
      return {
        ...state,
        labResults_Data: { requestPending: true },
      };
    
    // Upon occurrence of Action type:  read Success
    case labResults_Constants.READ_LABRESULTS_SUCCESS:
      return {
        ...state,
        labResults_Data: { labData: action.data, requestSuccessful: true },
        //test: action.data,
      };
    
    // Upon occurrence of Action type:  read Failure
    case labResults_Constants.READ_LABRESULTS_FAILURE:
      return {
        ...state,
        labResults_Data: { requestFailed: true },
      };
    
    // If no relevant Action types have occurred for this Reducer
    default:
      return state;
  }
}

import { READ_CORONA_STATE_SUCCESSFUL, READ_CORONA_STATE_PENDING, READ_CORONA_STATE_FAILURE } from '../_constants/corona.state.constants';

export default function coronaStateReducer(state = {}, action) {
  switch (action.type) {
    case READ_CORONA_STATE_SUCCESSFUL:
      return {...state, coronaStateData: { coronaState: action.data, requestSuccessful: true } };
    case READ_CORONA_STATE_PENDING:
      return {...state, coronaStateData: {requestPending: true } };
    case READ_CORONA_STATE_FAILURE:  
      return {...state, coronaStateData: { requestFailed: true } };
    default:
      return state;
  }
}

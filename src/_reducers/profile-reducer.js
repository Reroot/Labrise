import { profileConstants } from "../_constants";

export default function profileReducer(state = {}, action) {
  switch (action.type) {
    case profileConstants.GET_SUCCESS:
      return {
        ...state,
        profileData: { pData: action.data, requestSuccessful: true },
        test: action.data,
      };
    case profileConstants.GET_REQUEST:
      return {
        ...state,
        profileData: { requestPending: true },
      };
    case profileConstants.GET_FAILURE:
      return {
        ...state,
        profileData: { requestFailed: true },
      };
    case profileConstants.UPDATE_REQUEST:
      return {
        ...state,
        requestPending: true,
      };
    case profileConstants.UPDATE_SUCCESS:
      return {
        ...state,
        requestSuccessful: true,
      };
    case profileConstants.UPDATE_FAILURE:
      return {
        ...state,
        requestFailed: true,
      };
    default:
      return state;
  }
}

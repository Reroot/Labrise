import { homeConstants } from "../_constants";

export default function homeReducer(state = {}, action) {
  switch (action.type) {
    case homeConstants.GET_SUCCESS:
      return {
        ...state,
        profileData: { pData: action.data, requestSuccessful: true },
        test: action.data,
      };
    case homeConstants.GET_REQUEST:
      return {
        ...state,
        profileData: { requestPending: true },
      };
    case homeConstants.GET_FAILURE:
      return {
        ...state,
        profileData: { requestFailed: true },
      };
    default:
      return state;
  }
}

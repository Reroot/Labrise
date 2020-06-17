import { homeConstants } from "../_constants";

export default function homeReducer(state = {}, action) {
  switch (action.type) {
    case homeConstants.GET_SUCCESS:
      console.log("reducer succ");
      return {
        ...state,
        profileData: { data: action.data, requestSuccessful: true },
      };
    case homeConstants.GET_REQUEST:
      console.log("reducer pending");
      return {
        ...state,
        profileData: { requestPending: true },
      };
    case homeConstants.GET_FAILURE:
      console.log("reducer failed");
      return {
        ...state,
        profileData: { requestFailed: true },
      };
    default:
      return state;
  }
}

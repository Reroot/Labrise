import { profileConstants } from "../_constants";

export default function profileReducer(state = {}, action) {
  switch (action.type) {
    case profileConstants.GET_SUCCESS:
      return {
        ...state,
        profileData: { pData: action.data, requestSuccessful: true },
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
      console.log("update request sent");
      return {
        ...state,
        updatedProfileData: { requestPending: true },
      };
    case profileConstants.UPDATE_SUCCESS:
      alert("Profile Updated");
      return {
        ...state,
        updatedProfileData: { requestSuccessful: true },
      };
    case profileConstants.UPDATE_FAILURE:
      return {
        ...state,
        updatedprofileData: { requestFailed: true },
      };
    default:
      return state;
  }
}

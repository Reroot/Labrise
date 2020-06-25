import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import invoiceReducer from "./invoiceReducer";
import profileReducer from "./profile-reducer";
import CoronaReducer from "./CoronaReducer";
import CoronaStateReducer from "./CoronaStateReducer";
import modalDataReducer from "./modalDataReducer";
import patEventReducer from "./patEventReducer";
import rModalReducer from "./rModalReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  invoiceReducer,
  profileReducer,
  CoronaReducer,
  CoronaStateReducer,
  modalDataReducer,
  rModalReducer,
  patEventReducer
});

export default rootReducer;

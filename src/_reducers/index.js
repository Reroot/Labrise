import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import invoiceReducer from "./InvoiceReducer";
import profileReducer from "./profile-reducer";
import CoronaReducer from "./CoronaReducer";
import CoronaStateReducer from "./CoronaStateReducer";
import modalDataReducer from "./modalDataReducer";
import patEventReducer from "./patEventReducer";
import rModalReducer from "./rModalReducer";
import shellReducer from "./shellReducer";
import beetleReducer from "./beetleReducer";
import labResults_Reducer from "./labResults-Reducer";

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
  patEventReducer,
  labResults_Reducer,
  shellReducer,
  beetleReducer
});

export default rootReducer;

import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import invoiceReducer from "./invoiceReducer";
import profileReducer from "./profile-reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  invoiceReducer,
  profileReducer,
});

export default rootReducer;

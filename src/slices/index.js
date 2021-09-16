import { combineReducers } from "redux";

import contactReducer from "./contact";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default rootReducer;

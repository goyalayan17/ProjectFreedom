import { combineReducers } from "@reduxjs/toolkit";
import { registrationFormRootReducer } from "src/domian/registrationForm";

const rootReducer = combineReducers({
  domain: combineReducers({
    registrationForm: registrationFormRootReducer,
  }),
});

export default rootReducer;

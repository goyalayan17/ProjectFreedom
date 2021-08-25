import { takeLatest } from "@redux-saga/core/effects";
import { REGISTRATION_FORM_DETAILS_REQUEST } from "../actions/registrationFormDetailsRequestAction";
import getRegistrationInfo from "./getRegistrationDetails";

export const registrationFormRootSaga = [takeLatest(REGISTRATION_FORM_DETAILS_REQUEST, getRegistrationInfo)];
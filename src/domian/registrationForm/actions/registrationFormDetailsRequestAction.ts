import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_MODULE_PREFIX } from "../constants";

export const REGISTRATION_FORM_DETAILS_REQUEST = `${REGISTRATION_FORM_MODULE_PREFIX}_DETAILS_REQUEST`;

export interface IRegistrationFormDetailsRequestAction extends BaseAction<null> { };

export const registrationFormDetailsRequestAction: () => IRegistrationFormDetailsRequestAction = () => ({
    type: REGISTRATION_FORM_DETAILS_REQUEST,
    payload: null
});
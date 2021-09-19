import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_MODULE_PREFIX } from "../constants";

export const REGISTRATION_FORM_EMPTY = `${REGISTRATION_FORM_MODULE_PREFIX}_EMPTY`;

export interface IRegistrationFormEmpty extends BaseAction<null> { };

export const registrationFormEmpty: () => IRegistrationFormEmpty = () => ({
    type: REGISTRATION_FORM_EMPTY,
    payload: null
});
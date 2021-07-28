import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_MODULE_PREFIX } from "../constants";

export const REGISTRATION_FORM_ADD = `${REGISTRATION_FORM_MODULE_PREFIX}_ADD`;

export interface IAddRegistrationFormAction extends BaseAction<{ name: string, value: string | number }> { }

export const registrationFormAction: (payload: {
    name: string, value: string | number
}) => IAddRegistrationFormAction = payload => ({
    type: REGISTRATION_FORM_ADD,
    payload
});
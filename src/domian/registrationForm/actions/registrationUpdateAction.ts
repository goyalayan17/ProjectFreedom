import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_MODULE_PREFIX } from "../constants";
import { IRegistrationForm } from "../interfaces";

export const REGISTRATION_FORM_UPDATE = `${REGISTRATION_FORM_MODULE_PREFIX}_UPDATE`;

export interface IAddRegistrationUpdateAction extends BaseAction<{ index : number | undefined }> { }

export const registrationUpdateAction: (payload: {
    index : number | undefined
}) => IAddRegistrationUpdateAction = payload => ({
    type: REGISTRATION_FORM_UPDATE,
    payload
});
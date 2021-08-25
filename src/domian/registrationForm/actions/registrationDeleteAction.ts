import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_MODULE_PREFIX } from "../constants";

export const REGISTRATION_FORM_DELETE = `${REGISTRATION_FORM_MODULE_PREFIX}_DELETE`;

export interface IAddRegistrationDeleteAction extends BaseAction<{ index: undefined | number }> { }

export const registrationDeleteAction: (payload: {
    index: number | undefined
}) => IAddRegistrationDeleteAction = payload => ({
    type: REGISTRATION_FORM_DELETE,
    payload
});
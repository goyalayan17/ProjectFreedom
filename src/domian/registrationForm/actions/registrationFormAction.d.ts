import { BaseAction } from "src/domian/common";
export declare const REGISTRATION_FORM_ADD: string;
export interface IAddRegistrationFormAction extends BaseAction<{
    name: string;
    value: string | number;
}> {
}
export declare const registrationFormAction: (payload: {
    name: string;
    value: string | number;
}) => IAddRegistrationFormAction;

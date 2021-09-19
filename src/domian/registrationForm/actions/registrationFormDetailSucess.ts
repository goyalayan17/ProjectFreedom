import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_MODULE_PREFIX } from "../constants";
import { IRegistrationForm } from "../interfaces";

export const REGISTRATION_FORM_DETAILS_SUCESS = `${REGISTRATION_FORM_MODULE_PREFIX}_DETAILS_SUCCESS`;

export interface IRegistrationFormDetailSuccessAction
  extends BaseAction<{ registrationList: IRegistrationForm[] }> {}

export const registrationFormDetailSucess: (payload: {
  registrationList: IRegistrationForm[];
}) => IRegistrationFormDetailSuccessAction = (payload) => ({
  type: REGISTRATION_FORM_DETAILS_SUCESS,
  payload,
});

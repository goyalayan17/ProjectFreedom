import { BaseAction } from 'src/domian/common';
import { REGISTRATION_FORM_MODULE_PREFIX } from '../constants';
import { IRegistrationForm } from '../interfaces';

export const REGISTRATION_FORM_SUBMIT = `${REGISTRATION_FORM_MODULE_PREFIX}_SUBMIT`;

export interface IAddRegistrationListAction extends BaseAction<{ registrationForm: IRegistrationForm }> {}

export const registrationListAction: (payload: {
	registrationForm: IRegistrationForm;
}) => IAddRegistrationListAction = (payload) => ({
	type: REGISTRATION_FORM_SUBMIT,
	payload,
});

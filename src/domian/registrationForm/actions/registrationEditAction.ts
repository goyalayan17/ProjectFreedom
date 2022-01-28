import { BaseAction } from 'src/domian/common';
import { REGISTRATION_FORM_MODULE_PREFIX } from '../constants';

export const REGISTRATION_FORM_EDIT = `${REGISTRATION_FORM_MODULE_PREFIX}_EDIT`;

export interface IAddRegistrationEditAction extends BaseAction<{ index: undefined | number }> {}

export const registrationEditAction: (payload: { index: number | undefined }) => IAddRegistrationEditAction = (
	payload
) => ({
	type: REGISTRATION_FORM_EDIT,
	payload,
});

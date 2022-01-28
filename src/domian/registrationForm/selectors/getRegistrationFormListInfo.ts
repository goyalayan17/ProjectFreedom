import { IRegistrationForm, IRegistrationFormGlobalState } from '../interfaces';

export const getRegistrationFormListInfo = (state: IRegistrationFormGlobalState): IRegistrationForm[] =>
	state.domain.registrationForm.list;

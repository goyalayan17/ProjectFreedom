import { IRegistrationForm, IRegistrationFormGlobalState } from "../interfaces";

export const getRegistrationFormInfo=(state: IRegistrationFormGlobalState): IRegistrationForm =>
            state.domain.registrationForm.registrationForm;
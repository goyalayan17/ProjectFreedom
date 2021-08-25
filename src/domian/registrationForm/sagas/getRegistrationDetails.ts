import { call, put } from "@redux-saga/core/effects";
import { IRegistrationFormDetailsRequestAction } from "../actions";
import { IRegistrationForm } from "../interfaces";
import { RegistrationFormService } from "../services";

async function getRegistrationDetails(): Promise<IRegistrationForm[]> {
    const registrationFormService: RegistrationFormService = new RegistrationFormService();
    return registrationFormService.getRegistrationFormDetails();
};

export default function* getRegistrationInfo(
    action: IRegistrationFormDetailsRequestAction,
    getRegistrationDetailsHandler: () => Promise<IRegistrationForm[]> = getRegistrationDetails
) {
    try {
        const result = yield call(getRegistrationDetailsHandler);

    } catch (e) {

    }
};
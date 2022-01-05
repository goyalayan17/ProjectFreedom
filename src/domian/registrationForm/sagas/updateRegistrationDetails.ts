import { call, put } from "@redux-saga/core/effects";
import { IRegistrationFormDetailsRequestAction, registrationFormEmpty } from "../actions";
import { RegistrationFormService } from "../services";

async function updateRegistrationDetails(payload) {
    const registrationFormService: RegistrationFormService = new RegistrationFormService();
    return registrationFormService.updateRegistrationFormDetails(payload);
};

export default function* updateRegistrationInfo(
    action: IRegistrationFormDetailsRequestAction,
    updateRegistrationDetailsHandler = updateRegistrationDetails
) {
    let temp=action.payload;
    try {
         yield call(updateRegistrationDetailsHandler,temp);
        yield put(registrationFormEmpty());
    } catch (e) {

    }
};
import { call } from "@redux-saga/core/effects";
import { IRegistrationFormDetailsRequestAction } from "../actions";
import { RegistrationFormService } from "../services";

async function deleteRegistrationDetails(payload){
    const registrationFormService: RegistrationFormService = new RegistrationFormService();
    return registrationFormService.deleteRegistrationFormDetails(payload);
};

export default function* deleteRegistrationInfo(
    action: IRegistrationFormDetailsRequestAction,
    deleteRegistrationDetailsHandler = deleteRegistrationDetails,
    
) {
    let temp=action.payload;
    try {
         yield call(deleteRegistrationDetailsHandler,temp);
    } catch (e) {

    }
};



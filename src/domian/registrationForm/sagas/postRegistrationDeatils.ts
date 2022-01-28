import { call, put } from '@redux-saga/core/effects';
import { IRegistrationFormDetailsRequestAction } from '../actions';
import { registrationFormEmpty } from '../actions';
import { RegistrationFormService } from '../services';

async function postRegistrationDetails(payload) {
	const registrationFormService: RegistrationFormService = new RegistrationFormService();
	return registrationFormService.postRegistrationFormDetails(payload);
}

export default function* postRegistrationInfo(
	action: IRegistrationFormDetailsRequestAction,
	postRegistrationDetailsHandler = postRegistrationDetails
) {
	const temp = action.payload;
	try {
		yield call(postRegistrationDetailsHandler, temp);
		yield put(registrationFormEmpty());
	} catch (e) {}
}

import { call, put } from '@redux-saga/core/effects';
import { IRegistrationFormDetailsRequestAction, registrationFormDetailSucess } from '../actions';
import { IRegistrationForm } from '../interfaces';
import { RegistrationFormService } from '../services';

async function getRegistrationDetails(): Promise<IRegistrationForm[]> {
	const registrationFormService: RegistrationFormService = new RegistrationFormService();
	return registrationFormService.getRegistrationFormDetails();
}

export default function* getRegistrationInfo(
	action: IRegistrationFormDetailsRequestAction,
	getRegistrationDetailsHandler: () => Promise<IRegistrationForm[]> = getRegistrationDetails
) {
	try {
		const result = yield call(getRegistrationDetailsHandler);
		yield put(registrationFormDetailSucess(result));
	} catch (e) {}
}

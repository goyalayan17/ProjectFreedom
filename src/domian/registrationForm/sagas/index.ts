import { takeLatest } from '@redux-saga/core/effects';
import { REGISTRATION_FORM_DELETE, REGISTRATION_FORM_UPDATE } from 'src/domian';
import { REGISTRATION_FORM_DETAILS_REQUEST } from '../actions/registrationFormDetailsRequestAction';
import { REGISTRATION_FORM_POST } from '../actions/registrationPostDetailsAction';
import getRegistrationInfo from './getRegistrationDetails';
import postRegistrationInfo from './postRegistrationDeatils';
import deleteRegistrationInfo from './deleteRegistrationDetails';
import updateRegistrationInfo from './updateRegistrationDetails';

export const registrationFormRootSaga = [
	takeLatest(REGISTRATION_FORM_DETAILS_REQUEST, getRegistrationInfo),
	takeLatest(REGISTRATION_FORM_POST, postRegistrationInfo),
	takeLatest(REGISTRATION_FORM_DELETE, deleteRegistrationInfo),
	takeLatest(REGISTRATION_FORM_UPDATE, updateRegistrationInfo),
];

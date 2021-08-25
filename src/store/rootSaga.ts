import { all } from "@redux-saga/core/effects";
import { registrationFormRootSaga } from "src/domian/registrationForm/sagas";

export function* rootSaga() {
    yield all([...registrationFormRootSaga]);
};
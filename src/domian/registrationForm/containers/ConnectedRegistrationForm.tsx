import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { registrationFormAction } from "../actions";
import { Registration } from "../components";
import { IRegistrationForm, IRegistrationFormGlobalState } from "../interfaces";
import { getRegistrationFormInfo } from "../selectors";

interface IStateProps {
    registrationList: IRegistrationForm[];
    registrationForm: IRegistrationForm;
}

interface IDispatchProps {
    onChange:(name: string, value: string | number)=> void;
};

const mapStateFromProps = (state: IRegistrationFormGlobalState): IStateProps => {
    const defaultRegistrationFormValue = {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "female",
        class: "0",
      };
    const registrationForm = getRegistrationFormInfo(state) || defaultRegistrationFormValue;

    return {
        registrationList: [],
        registrationForm 
    }
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    onChange: (name: string, value: string | number) =>
        dispatch(registrationFormAction({ name, value }))
});

export const ConnectedRegistrationForm = connect(mapStateFromProps, mapDispatchToProps)(Registration);
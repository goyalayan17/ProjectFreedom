import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { registrationFormAction } from "../actions";
import { Registration } from "../components";
import { IRegistrationForm, IRegistrationFormGlobalState } from "../interfaces";

interface IStateProps {
    registrationList: IRegistrationForm[];
}

interface IDispatchProps {
    onChange:(name: string, value: string | number)=> void;
};

const mapStateFromProps = (state: IRegistrationFormGlobalState): IStateProps => {

    return {
        registrationList: []
    }
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    onChange: (name: string, value: string | number) =>
        dispatch(registrationFormAction({ name, value }))
});

export const ConnectedRegistrationForm = connect(mapStateFromProps, mapDispatchToProps)(Registration);
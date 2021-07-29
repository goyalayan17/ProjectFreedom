import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { registrationEditAction, registrationFormAction, registrationListAction } from "../actions";
import { Registration } from "../components";
import { IRegistrationForm, IRegistrationFormGlobalState } from "../interfaces";
import { getRegistrationFormInfo } from "../selectors";
import { getRegistrationFormListInfo } from "../selectors";

interface IStateProps {
    registrationList: IRegistrationForm[];
    registrationForm: IRegistrationForm;
}

interface IDispatchProps {
    onChange:(name: string, value: string | number)=> void;
    onSubmit:(registrationForm:IRegistrationForm)=> void;
    onEdit:(index: number | undefined)=> void;
};


const mapStateFromProps = (state: IRegistrationFormGlobalState): IStateProps => {
    const registrationForm = getRegistrationFormInfo(state);
    const registrationList = getRegistrationFormListInfo(state);
    return {
        registrationList,
        registrationForm 
    }
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    onChange: (name: string, value: string | number) =>
        dispatch(registrationFormAction({ name, value })),

    onSubmit:(registrationForm:IRegistrationForm)=>
        dispatch(registrationListAction({registrationForm})),

    onEdit:(index: number | undefined)=>
        dispatch(registrationEditAction({index}))
});

export const ConnectedRegistrationForm = connect(mapStateFromProps, mapDispatchToProps)(Registration);
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { registrationDeleteAction, registrationEditAction, registrationFormAction, registrationFormDetailsRequestAction, registrationFormEmpty, registrationListAction, registrationUpdateAction } from "../actions";
import { registrationPostDetailsAction } from "../actions/registrationPostDetailsAction";
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
    onAgreeUpdate:(index: number | undefined , registrationForm:IRegistrationForm)=> void;
    onDelete:(index: number | undefined) => void;
    getRegistrationDetails:()=>void;
    onCancle:()=>void;
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
        dispatch(registrationPostDetailsAction({registrationForm})),

    onEdit:(index: number | undefined)=>
        dispatch(registrationEditAction({index})),

    onAgreeUpdate:(index:number | undefined,registrationForm:IRegistrationForm)=>
        dispatch(registrationUpdateAction({index,registrationForm})),

    onDelete:(index:number | undefined)=>
        dispatch(registrationDeleteAction({index})),

    getRegistrationDetails:()=>
        dispatch(registrationFormDetailsRequestAction()),
    onCancle:()=>
        dispatch(registrationFormEmpty())
});

export const ConnectedRegistrationForm = connect(mapStateFromProps, mapDispatchToProps)(Registration);
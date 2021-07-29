import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_ADD, IAddRegistrationFormAction } from "../actions";
import { IRegistrationFormInfo } from "../interfaces";

export const registrationFormRootReducer:(state: IRegistrationFormInfo, action: BaseAction<any>)=> IRegistrationFormInfo =(
    state = {} as IRegistrationFormInfo,
    action 
)=>{
    switch(action.type) {
        case REGISTRATION_FORM_ADD:
            return {
                ...state, 
                registrationForm:{
                    ...state.registrationForm,
                    [action.payload.name]: action.payload.value
                }     
            };
        default:
            return state;
    }
};
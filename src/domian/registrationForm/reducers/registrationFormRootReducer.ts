import { BaseAction } from "src/domian/common";
import { REGISTRATION_FORM_ADD, REGISTRATION_FORM_EDIT } from "../actions";
import {REGISTRATION_FORM_SUBMIT} from "../actions"
import { IRegistrationFormInfo } from "../interfaces";
const defaultRegistrationFormValue = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "female",
    claass: "0",
  };
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
            case REGISTRATION_FORM_SUBMIT:
                return{
                    ...state,
                    list:[...(state.list ?? []), action.payload.registrationForm],
                    registrationForm: defaultRegistrationFormValue
                }
                case REGISTRATION_FORM_EDIT:
                    return{
                        ...state,
                        registrationForm:state.list[action.payload.index]
                    }
        default:
             return state.registrationForm ? state :  {
                ...state, 
                registrationForm: defaultRegistrationFormValue
            };
    }
};
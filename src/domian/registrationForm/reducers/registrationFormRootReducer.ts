import { BaseAction } from "src/domian/common";
import {
  REGISTRATION_FORM_ADD,
  REGISTRATION_FORM_DETAILS_SUCESS,
  REGISTRATION_FORM_EDIT,
  REGISTRATION_FORM_EMPTY
} from "../actions";
import { IRegistrationFormInfo } from "../interfaces";
const defaultRegistrationFormValue = {
  id:undefined,
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "female",
  claass: "0",
};
export const registrationFormRootReducer: (
  state: IRegistrationFormInfo,
  action: BaseAction<any>
) => IRegistrationFormInfo = (state = {} as IRegistrationFormInfo, action) => {
  switch (action.type) {
    case REGISTRATION_FORM_ADD:
      return {
        ...state,
        registrationForm: {
          ...state.registrationForm,
          [action.payload.name]: action.payload.value,
        },
      };
    case REGISTRATION_FORM_EDIT:
      return {
        ...state,
        registrationForm: state.list[state.list.findIndex((ele)=>ele.id===action.payload.index)],
      };
    case REGISTRATION_FORM_EMPTY:{
      return{
        ...state,
        registrationForm:defaultRegistrationFormValue
      }
    }
    case REGISTRATION_FORM_DETAILS_SUCESS:{
      return {
        ...state,
        list:action.payload
      }
    }
    default:
      return state.registrationForm
        ? state
        : {
            ...state,
            registrationForm: defaultRegistrationFormValue,
          };
  }
};

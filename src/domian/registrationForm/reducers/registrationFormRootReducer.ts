import { BaseAction } from "src/domian/common";
import {
  REGISTRATION_FORM_ADD,
  REGISTRATION_FORM_DELETE,
  REGISTRATION_FORM_EDIT,
  REGISTRATION_FORM_UPDATE,
} from "../actions";
import { REGISTRATION_FORM_SUBMIT } from "../actions";
import { IRegistrationFormInfo } from "../interfaces";
const defaultRegistrationFormValue = {
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
    case REGISTRATION_FORM_SUBMIT:
      return {
        ...state,
        list: [...(state.list ?? []), action.payload.registrationForm],
        registrationForm: defaultRegistrationFormValue,
      };
    case REGISTRATION_FORM_EDIT:
      return {
        ...state,
        registrationForm: state.list[action.payload.index],
      };
    case REGISTRATION_FORM_UPDATE: {
      const list = [...state.list];
      list.splice(action.payload.index, 1);
      return {
        ...state,
        list: [...list, state.registrationForm],
        registrationForm:defaultRegistrationFormValue
      };
    }
    case REGISTRATION_FORM_DELETE:{
        const dellist=[...state.list];
        dellist.splice(action.payload.index,1);
        return{
            ...state,
            list:[...dellist],
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

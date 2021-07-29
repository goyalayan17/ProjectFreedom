import * as React from "react";
import { IRegistrationForm } from '../interfaces';
export interface IRegistrationProps {
    onChange: (name: string, value: string | number) => void;
    registrationList: IRegistrationForm[];
    registrationForm: IRegistrationForm;
}
export declare const Registration: React.FC<IRegistrationProps>;

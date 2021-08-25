import { IRegistrationForm, IRegistrationFormService } from "../interfaces";
import axios, { AxiosResponse } from 'axios';

export class RegistrationFormService implements IRegistrationFormService {
    private static headers = {
        'content-type': 'application-json'
    };
    public async getRegistrationFormDetails(): Promise<IRegistrationForm[]> {
        const url = '';
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    };
}
import { IRegistrationForm, IRegistrationFormService } from '../interfaces';
import axios, { AxiosResponse } from 'axios';

export class RegistrationFormService implements IRegistrationFormService {
	public async getRegistrationFormDetails(): Promise<IRegistrationForm[]> {
		const url = 'https://localhost:44383/registration/get';
		const response: AxiosResponse = await axios.get(url);
		return response.data;
	}
	public async postRegistrationFormDetails(payload) {
		const url = 'https://localhost:44383/registration/add';
		const options = {
			headers: { 'Content-Type': 'application/json' },
		};

		await axios.post(url, payload.registrationForm, options);
	}
	public async deleteRegistrationFormDetails(payload) {
		const url = 'https://localhost:44383/registration/delete';
		await axios.delete(url, { data: payload.index, headers: { 'Content-Type': 'application/json' } });
	}

	public async updateRegistrationFormDetails(payload) {
		const index = payload.index;
		const url = `https://localhost:44383/registration/update/${index}`;
		const options = {
			headers: { 'Content-Type': 'application/json' },
		};

		await axios.put(url, payload.registrationForm, options);
	}
}

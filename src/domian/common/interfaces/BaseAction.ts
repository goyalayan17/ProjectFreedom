import { Action } from '@reduxjs/toolkit';

export class BaseAction<T> implements Action<string> {
	public type: string;
	public payload: T;
}

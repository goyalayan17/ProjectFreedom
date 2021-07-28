import { Action } from '@reduxjs/toolkit';
export declare class BaseAction<T> implements Action<string> {
    type: string;
    payload: T;
}

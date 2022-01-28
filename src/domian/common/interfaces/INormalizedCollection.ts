export interface INormalizedCollection<T, K extends keyof T> {
	// @ts-ignore
	byId: { [id: K]: T };
	allIds: (string | number)[];
}

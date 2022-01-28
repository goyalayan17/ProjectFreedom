export interface INormalizedCollectionGeneratedKey<T, K extends number | string> {
	// @ts-ignore
	byId: { [id: K]: T };
	allIds: K[];
}

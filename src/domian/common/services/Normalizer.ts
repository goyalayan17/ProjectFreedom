import { INormalizedCollection, INormalizedCollectionGeneratedKey } from '../interfaces';

export function normalizeForRedux<T, K extends keyof T, S extends keyof T>(
	collection: T[],
	keyProp: K,
	compareKeyOrFunc?: S | ((a: T, b: T) => number)
): INormalizedCollection<T, K> {
	const byIdData = normalizeToKeyValue(collection, keyProp);

	if (Object.keys(byIdData).length === 0) {
		return { byId: {}, allIds: new Array<number | string>() };
	}

	let compareFunc =
		typeof compareKeyOrFunc == 'function'
			? compareKeyOrFunc
			: (a: any, b: any) => a[compareKeyOrFunc] - b[compareKeyOrFunc];

	const allIds = compareKeyOrFunc
		? getAllIdsWithSorting(byIdData, keyProp, compareFunc)
		: collection.map((e) => e[keyProp]);

	return {
		byId: Object.assign({}, byIdData),
		// @ts-ignore
		allIds,
	};
}

export function deNormalizeFromRedux<T, K extends keyof T>(normalizedCollection: INormalizedCollection<T, K>): T[] {
	return Object.values(normalizedCollection.byId);
}

export function normalizeToKeyValue<T, K extends keyof T>(collection: T[], keyprop: K): { [K in string | number]: T } {
	if (!collection || collection.length === 0 || !keyprop) {
		return {};
	}

	const byIdData = collection.reduce((result, element) => {
		// @ts-ignore
		result[element[keyprop]] = element;

		return result;
	}, {});

	return byIdData;
}

export function convertMapToNormalizedCollection<T, K extends number | string>(
	map: Map<K, T>
): INormalizedCollectionGeneratedKey<T, K> {
	const collection = createEmptyNormalizedCollection<T, K>();

	for (let key of Array.from(map.keys())) {
		collection.allIds.push(key);
		collection.byId = {
			...collection.byId,
			[key]: map.get(key),
		};
	}

	return collection;
}

export const createEmptyNormalizedCollection = function <
	T,
	K extends number | string
>(): INormalizedCollectionGeneratedKey<T, K> {
	return getEmptyNormalizedCollection<T, K>();
};

export const resetNormalizedCollection = function <T, K extends number | string>(): INormalizedCollectionGeneratedKey<
	T,
	K
> {
	return getEmptyNormalizedCollection<T, K>();
};

function getEmptyNormalizedCollection<T, K extends number | string>(): INormalizedCollectionGeneratedKey<T, K> {
	return {
		byId: {},
		allIds: [],
	};
}

function getAllIdsWithSorting<T, K, S>(entity: T, keyprop: K, compareFunc: (a: any, b: any) => number): Array<K> {
	return Object.values(entity)
		.sort(compareFunc)
		.map((a) => a[keyprop]);
}

import * as i18next from 'i18next';
const i18n = require('i18next');

const locale = new Map<string, string>([
	['en', 'en-us'],
	['fr', 'fr-ca'],
	['es', 'es-es'],
]);

export class TranslationService {
	public static translate<
		TKeys extends string = string,
		TValues extends object = object,
		TResult extends string | object | Array<string | object> = string | object | Array<string | object>
	>(key: TKeys | TKeys[], options?: i18next.TOptions<TValues>) {
		return i18n.t(key, options) ? i18n.t(key, options).toString() : key;
	}
}

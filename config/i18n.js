import Backend from 'i18next-xhr-backend';
import i18next from 'i18next';
import { reactI18NextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

function isNumber(n) {
	return !isNaN(parseFloat(n) && !isNaN(n - 0));
}

export const i18nInterpolation = {
	escapeValue: false,
	formatSeparator: ',',
	format: function (value, format) {
		if (isNumber(value)) return value;
		return value;
	},
};

const overrideLanguageCode = null;
const languages = ['en', 'fr', 'es'];
const i18nconfig = {
	ns: ['translations'],
	defaultNS: 'translations',
	fallbackLng: 'en',
	keySeparator: '>',
	nsSeparator: '|',
	resources: {
		en: {
			translations: {},
		},
		fr: {
			translations: {},
		},
	},
	partialBundledLanguages: true,
	backend: {
		loadPath: 'i18n/{{lng}}.json',
		addPath: 'i18n/{{lng}}',
	},
	detection: {
		caches: null,
	},
	debug: true,
	interpolation: i18nInterpolation,
	react: {
		wait: true,
		withRef: false,
		interpolation: {
			escapeValue: false,
		},
		bindI18n: 'languageChanged',
		bindStore: false,
		nsMode: 'default',
	},
};

if (overrideLanguageCode) i18nconfig.lng = overrideLanguageCode;

i18next.on('languageChanged', function () {});

let i18nInstance = i18next
	.use(Backend)
	.use(LanguageDetector)
	.use(reactI18NextModule)
	.init(i18nconfig)
	.then(() => i18next.reloadResources());

export { i18nInstance, languages };

export default i18nInstance;

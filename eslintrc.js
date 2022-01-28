module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    globals:{
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.test.json",
        ecmaVersion: 2015,
        sourceType: "module"
    },
    settings:{
        react: {
            version: "detect"
        }
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "react-hooks",
        'eslint-plugin-local-rules'
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'prettier/prettier': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true
            }
        ],
        'react/prop-types': ['off']
    }
}

'use strict';

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        'node': true,
    },
    rules: {
        'dot-notation': [
            2,
            {
                allowKeywords: true,
                allowPattern: '^[a-z]+(_[a-z]+)+$',
            },
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'variableLike', format: ['camelCase'], leadingUnderscore: 'allow' },
            { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
            { selector: 'memberLike', format: ['strictCamelCase'] },
            { selector: 'enumMember', format: ['StrictPascalCase'] },
            { selector: 'typeLike', format: ['PascalCase'] },
            { selector: 'typeParameter', format: ['strictCamelCase', 'UPPER_CASE'] },
            { selector: 'property', format: ['strictCamelCase'] },
            { selector: 'method', format: ['strictCamelCase'] },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
    },
};

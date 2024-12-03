'use strict';

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // NOTE: global ignores (https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores)
  {
    ignores: ['dist', 'artifacts', 'cache', 'JPYCv2', '**/*.test.ts', 'eslint.config.js'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        node: true,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
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
        { selector: 'property', format: ['strictCamelCase', 'PascalCase'] },
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
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
);

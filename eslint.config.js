import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      reactHooks,
      reactRefresh,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.eslint.json'
        },
      },
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/no-named-as-default': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'array-bracket-spacing': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'semi': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'quotes': ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-floating-promises': 'error',
      'no-unexpected-multiline': 'error',
      'no-extra-semi': 'error',
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'semi': ['error', 'always'],
      'no-empty': 'error',
      'import/order': ['error', { 'alphabetize': { order: 'asc' } }],
      'import/first': 'error',
      'space-infix-ops': 'error',
    },
  },
]);

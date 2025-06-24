// eslint.config.js
const { defineFlatConfig } = require('eslint-define-config');
const nextPlugin = require('@next/eslint-plugin-next');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');

module.exports = defineFlatConfig([
  {
    ignores: ['.next/', 'node_modules/', 'dist/']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'import': importPlugin
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' }
        }
      ]
    }
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/prop-types': 'off'
    }
  },
  {
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': ['error', 'src/app'],
      '@next/next/no-img-element': 'warn'
    }
  }
]);
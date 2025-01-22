import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-var': 'error', // Disallow the use of var
      'prefer-const': 'error', // Suggest using const
      'no-unused-vars': 'warn', // Warn on unused variables
      'eqeqeq': ['error', 'always'], // Require the use of === and !==
      'curly': 'error', // Require curly braces for all control statements
      'no-console': 'warn', // Warn on console statements
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      'indent': ['error', 2], // Enforce 2-space indentation
      'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline objects and arrays
      'no-trailing-spaces': 'error', // Disallow trailing whitespace
      'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses
      'keyword-spacing': ['error', { 'before': true, 'after': true }], // Enforce spacing around keywords
      'space-infix-ops': 'error', // Require spacing around infix operators
      'object-curly-spacing': ['error', 'always'], // Require spacing inside curly braces
      'array-bracket-spacing': ['error', 'never'], // Disallow spacing inside array brackets
    },
  },
];

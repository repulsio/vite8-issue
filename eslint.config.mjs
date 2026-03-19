import js from '@eslint/js';

import prettier from 'eslint-config-prettier';

import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,

	// ...ts.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},

	prettier,

	{
		ignores: [
			//
			'**/asset/',
			'**/dist/',
			'**/lib/',
			'**/node_modules/',
			'**/scripts/',

			'**/*.cjs',
			'**/*.mjs',

			'**/*.config.*s',
		],
	},

	{
		rules: {
			/*
				==================================================================== Core ====================================================================
				https://eslint.org/docs/latest/rules/
			*/
			/* -------------------------------------------------------------- Recommended --------------------------------------------------------------- */
			'no-constant-condition': 'warn',

			// 'no-debugger': 'off',

			'no-empty-pattern': 'warn',

			'no-unused-private-class-members': 'warn',

			'no-useless-assignment'	: 'warn',

			'no-useless-escape': 'warn',

			/* ----------------------------------------------------------------- Strict ----------------------------------------------------------------- */
			// 'prefer-const': 'warn',

			/* ----------------------------------------------------------------- Other ------------------------------------------------------------------ */
			'require-await': 'error',

			/*
				================================================================= TypeScript =================================================================
				https://typescript-eslint.io/rules/
			*/
			/* -------------------------------------------------------------- Recommended --------------------------------------------------------------- */
			'@typescript-eslint/ban-ts-comment': 'off',

			'@typescript-eslint/no-empty-object-type': 'warn',
			'@typescript-eslint/no-unsafe-function-type': 'warn',

			'@typescript-eslint/no-unused-vars': 'off',

			'@typescript-eslint/unbound-method': 'off',

			/* ----------------------------------------------------------------- Strict ----------------------------------------------------------------- */
			'@typescript-eslint/no-unnecessary-condition': 'warn',

			'@typescript-eslint/restrict-template-expressions': 'off',

			/* --------------------------------------------------------------- Stylistic ---------------------------------------------------------------- */
			'@typescript-eslint/no-empty-function': 'warn',
			'@typescript-eslint/no-empty-interface': 'warn',

			/* ----------------------------------------------------------------- Other ------------------------------------------------------------------ */
			'@typescript-eslint/explicit-function-return-type': 'error',
		},
	},
);

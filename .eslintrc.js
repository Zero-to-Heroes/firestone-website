module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module',
	},
	extends: [
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier',
	],
	rules: {
		'no-multi-spaces': 2,
		'prefer-rest-params': 0,
		'@typescript-eslint/explicit-function-return-type': 0, // Temporary, until code violations are fixed
		'@typescript-eslint/no-explicit-any': 0, // Temporary, until code violations are fixed
		'@typescript-eslint/no-parameter-properties': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/explicit-member-accessibility': [
			2,
			{
				accessibility: 'explicit',
				overrides: {
					accessors: 'off', // Same as methods
					constructors: 'no-public', // Just don't care, avoid bloat
					methods: 'off', // We want to be able to use a 'no access', to show it's used by the template but not meant to be used by outside callers
					properties: 'off',
					// parameterProperties: 'explicit'
				},
			},
		],
		'@typescript-eslint/no-object-literal-type-assertion': [
			0,
			{
				// Ideally would like to enable this, but I can't make the allow-arguments option to work
				'allow-arguments': true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			1,
			{
				'vars': 'all',
				'args': 'none', // When implementing interfaces, I find it's easier to read if all parameters are always declared
				'ignoreRestSiblings': true, // For object destructuring
			},
		],
		'@typescript-eslint/no-use-before-define': 0,
		// Used at a single place, in utils.ts
		'@typescript-eslint/no-this-alias': 0,
	},
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				project: ['tsconfig.json', 'e2e/tsconfig.json'],
				createDefaultProgram: true,
			},
		},
		{
			files: ['*.html'],
			parser: '@angular-eslint/template-parser',
			parserOptions: {
				project: './tsconfig.app.json',
				ecmaVersion: 2020,
				sourceType: 'module',
			},
			plugins: ['@angular-eslint/template'],
		},
	],
};

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
	},
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		// fast development rules
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"react/display-name": "off",

		// normal rules
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"jsx-a11y/label-has-associated-control": [
			"error",
			{
				labelComponents: [],
				labelAttributes: [],
				controlComponents: [],
				assert: "either",
				depth: 25,
			},
		],
		"@typescript-eslint/no-explicit-any": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};

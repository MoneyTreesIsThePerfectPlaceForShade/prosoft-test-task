const parser = require('@typescript-eslint/parser');
const rulesPlugin = require('@nsmp/eslint-plugin-rules');
const {configs} = rulesPlugin;

module.exports = [
	...configs['recommended-js'],
	...configs['recommended-ts'],
	...configs['recommended-react'],
	...configs['recommended-custom-rules'],
	{
		languageOptions: {
			parser
		},
		rules: {
			'@nsmp/rules/no-fetch-xhr': 'off',
			'react/display-name': 'off'
		}
	},
	{
		ignores: []
	}
];

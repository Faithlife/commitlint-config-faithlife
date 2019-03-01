module.exports = {
	printWidth: 100,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'es5',
	overrides: [
		{
			files: 'package.json',
			options: {
				useTabs: false,
			},
		},
	],
};

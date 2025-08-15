module.exports = {
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'perf',
				'build',
				'chore',
				'ci',
				'docs',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'scope-empty': [2, 'never'],
		'subject-empty': [2, 'never'],
		'body-leading-blank': [2, 'always'],
		'footer-leading-blank': [2, 'always'],
	},
};

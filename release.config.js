/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: ['master', 'fix/npm-trusted-publishing-v5'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		// require.resolve forces the project-root v13 install via absolute path,
		// bypassing semantic-release's own bundled @semantic-release/npm v12.
		require.resolve('@semantic-release/npm'),
		'@semantic-release/github',
	],
};

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: ['master'],
	// @semantic-release/npm verifyConditions calls `npm whoami` which is not
	// supported by OIDC Trusted Publishing tokens. Skip it here.
	// The publish step calls `npm publish --provenance` which handles OIDC natively.
	verifyConditions: ['@semantic-release/github'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		'@semantic-release/github',
	],
};

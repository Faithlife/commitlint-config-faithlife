# commitlint-config-faithlife

This is a shared configuration for `commitlint` used by Faithlife / Logos Bible Software.

## Philosophy

This package aims to be dependency-free: there is little to gain from depending on another config and then overriding it with our own customizations, and there are real costs (keeping dependencies up-to-date, properly handling breaking changes, etc.).

The rules in this shared config focus on requiring what is important for tooling and automated versioning. They avoid enforcing stylistic concerns that are not meaningful for automation.

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/), and the docs are useful to consult. (The open source `@commitlint/config-conventional` shared config enforces stylistic preferences beyond the scope of what's in the spec and isn't suitable for our needs.)

## Installation

1. Install [`commitlint`](https://commitlint.js.org/) and this config

```
yarn add @commitlint/cli commitlint-config-faithlife --dev
```

2. Create a `commitlint.config.js` that extends `faithlife`:

**ESM:**

```js
/** @type {import('@commitlint/types').UserConfig} */
export default {
	extends: ['faithlife'],
};
```

**CommonJS:**

```js
/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
	extends: ['faithlife'],
};
```

3. If you haven't already, you'll also probably want to configure `husky` to run `commitlint` as a commit-msg hook.

---

### Husky installation

See [Husky docs](https://typicode.github.io/husky/) for the most up-to-date instructions.

1. Install `husky`. 

```
yarn add husky --dev
```

2. Add a `prepare` script to `package.json`—this ensures `husky` runs when packages are installed, which allows it to register git hooks:

```jsonc
{
	"name": "my-rad-js-package",
	"version": "1.0.0",
	// ...
	"scripts": {
		// add this:
		"prepare": "husky",
	},
}
```

3. Create a `.husky/commit-msg` file that contains:

```
commitlint --edit $1
```

## Example

> Note: the following is not only a terrible commit message, it's also technically invalid—`"type"` is not a valid `type`—but it's a helpful illustration of the format using the token names in context.

```
type(scope): A subject or description.

This is body content.

BREAKING CHANGE: this is a footer.
```

## Rules

#### type

`type` is required, must be lowercase, and must be one of the following types:

```
feat
fix
perf

build
chore
ci
docs
refactor
revert
style
test
```

By default, only `feat`, `fix`, and `perf` will trigger a release with release notes.[^1] (`BREAKING CHANGE: ...` will always trigger a release, regardless of the `type`.)

[^1]: This is controlled by your project's `semantic-release` config and is outside the scope of this repo.

#### scope

`scope` is required. Sometimes scopes refer to sub-projects within a monorepo; sometimes they refer to feature areas within a single project. Enforcement of specific scope values is outside the _scope_ of this shared config.

#### subject

`subject`—also called `description` in the Conventional Commits spec—is required.

There are intentionally no enforced requirements on casing or ending punctuation.

#### body

`body`—an optional free-form supplementary description accompanying the commit message—must be preceded by one blank line. This is specified in the Conventional Commits spec.

#### footer

`footer`—may include `BREAKING CHANGE:` or `Co-authored-by:` or other supplemental footer information—must be preceded by one blank line. This is specified in the Conventional Commits spec.

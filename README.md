# Eslint for WTT projects

## Setup for your project

Install this library

```
yarn add --dev @wttsolutions/eslint-config
```

Create the local `.prettierrc` config file:

```
{
  "singleQuote": true
}
```

Create the local `.eslintrc` config file:

```
{
  ...
  "extends": [
    "@wttsolutions/eslint-config/react",
    //"@wttsolutions/eslint-config" (if no React)
  ],
  rules: {
    // any local rules & exceptions if really necessary
  }
  ...
}
```

Modify the `package.json`:

```
...
"scripts": {
  ...
  "prettier": "prettier -l src"
  "prettier:fix": "prettier -w src"
  "lint": "eslint src",
  "lint:fix": "eslint --fix src",
}
...
"eslintConfig": {
  "extends": [
    "./.eslintrc"
  ]
}
```

NOTE: `src` is the project sources directory

Run run `yarn lint` to check a project errors are displayed in console.

Configure your code editor to make him automatically prettify and lint code by the `.eslintrc` and `.prettierrc` configs.

### How it should work

1. `prettier -w` formats code
2. `eslint --fix` applies linting rules to code
3. developer see the remained eslint errors in the code editor and fix them manually

Generally you should configure your code editor to make him perform steps 1 and 2 automatically by the `.eslintrc` and `.prettierrc` rules. Assummed that you do not run any of added scripts manually in most cases.

## Internal: modify & publish this repository

Make sure you have wright permissions to the https://github.com/wttsolutions/eslint-config repository and your npmjs.com acccount included into the [npmjs.com -> wttsolutions -> develpers](https://www.npmjs.com/settings/wttsolutions/teams/team/developers/users) team members.

Make your changes & increase package version:

```
yarn version:patch
git commit ....
git push
```

Log in to https://npmjs.com (2-factor authentication to will be required):

```
yarn login
```

Publish a package (just skip version question - the new one is already wrote to package.json):

```
yarn publ
```

### TODO

- ts support

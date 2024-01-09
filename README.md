# Eslint for WTT projects

## Setup for your project

Install this library

```
yarn add --dev @wttsolutions/eslint-config eslint prettier
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
  "extends": [
    "@wttsolutions/eslint-config/react",
    //"@wttsolutions/eslint-config" (if no React)
  ],
  rules: {
    // local rules
    //"no-var": "off"
  }
}
```

Modify the `package.json`:

```
...
"scripts": {
  ...
  "prettify": "prettier --check src/**/*.{js,jsx}",
  "prettify:fix": "prettier -write src/**/*.{js,jsx}",
  "lint": "eslint src",
  "lint:fix": "eslint --fix src"
}
...
```


Configure your code editor to make him automatically prettify and lint code by the `.eslintrc` and `.prettierrc` configs.  Assummed that you shouldn't run linting scripts manually in most cases.


### How it works

1. `prettier` formats code
2. `eslint` applies linting rules to code
3. developer see the remained eslint errors in the code editor and fix them manually

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
 - add stylelint
 - ts support
.

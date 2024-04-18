# Eslint for WTT projects


## Setup


```
yarn add --dev @wttsolutions/eslint-config@^0.1 eslint prettier

// for react:
yarn add --dev react


```

Create `prettier.config.js` with:
```
module.exports = {
  ...require('@wttsolutions/eslint-config/prettier.config.js'),
  // custom rules
  // singleQuote: false
}

```

Create the local `.eslintrc` config file:

```
{
  "extends": [
    "@wttsolutions/eslint-config",
    "@wttsolutions/eslint-config/react", // optional
    "@wttsolutions/eslint-config/ts"  // optional
  ],
  rules: {
    // "no-var": "off"
  }
}
```

(Optional) Create the local `tsconfig.json` config file:
```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",

  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "bundler",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true,
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    /* free typing */
    "noImplicitAny": false,
    "noImplicitThis": false,
    "allowJs": true,
    "checkJs": true
  },
  "exclude": ["node_modules"]
}
```


Modify the `package.json`:

```
...
"scripts": {
  ...
  "prettify": "prettier --check src/**/*.{js,jsx,ts,tsx}",
  "prettify:fix": "prettier --write src/**/*.{js,jsx,ts,tsx}",
  "lint": "eslint src",
  "lint:fix": "eslint --fix src"
}
...
```


Configure your code editor to make him automatically prettify and lint code by the `.eslintrc` and `prettier.config.js` configs.  Assummed that you shouldn't run linting scripts manually in most cases.

## Internal: updating this package

### 1. Login to npm
Make sure you have wright permissions to the https://github.com/wttsolutions/eslint-config repository and your npmjs.com acccount included into the [npmjs.com -> wttsolutions -> develpers](https://www.npmjs.com/settings/wttsolutions/teams/team/developers/users) team members.

```
yarn login
```

### 2. Update package & version

```
yarn version:patch
git commit ....
git push
yarn publ
```
Note: when running `yarn publ` DON'T modify the version (it's already updated by `yarn version:patch`




## How it works

1. `prettier` formats code
2. `eslint` applies linting rules to code
3. developer see the remained eslint errors in the code editor and fix them manually
## TODO
 - add stylelint
 - update to eslint v9 after
   dependept packages support it. In particular:
    - babel/eslint/babel-eslint-parser/package.json at main · babel/babel https://github.com/babel/babel/blob/main/eslint/babel-eslint-parser/package.json
    - https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/package.json
    and probably others (try ```yarn add eslint@^9.0.0``` and see all warnings)
   (see also config-base-9.js)


## Note
using eslint & typescript as OWN dependencies (not peer) to make this package works more independently from project where it would be used & keep all plugins compatible

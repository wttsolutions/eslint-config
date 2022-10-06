# Eslint for WTT projects

## Setup for your project


```
yarn add --dev @wttsolutions/eslint-config
```  

Create local config `.eslintrc`:

```
{
  ...
  "extends": [
    "@wttsolutions/eslint-config",  
    // OR "@wttsolutions/eslint-config/react"  
  ],
  rules: {
    // any local rules & exceptions
  }
  ...
}
```

Write to `package.json` 

```
...
"scripts": {
  ...
  "lint": "eslint src",
  "lint:fix": "eslint --fix src"  
}
```

where `src` is the directory wit a project sources

Run run `yarn lint` to see a project errors.

Configure your code editor to use `.eslintrc` rules

## Internal: modify & publish this repository

1. Make sure you have wright permissions to the https://github.com/wttsolutions/eslint-config repository and your npmjs.com acccount included into the [npmjs.com -> wttsolutions -> develpers](https://www.npmjs.com/settings/wttsolutions/teams/team/developers/users) team members

1. Make your changes & increase package version:
```
yarn version:patch
git commit ....
git push      
```

1. Log in to https://npmjs.com (2-factor authentication to will be required):
```
yarn login
```

1. Publish a package (just skip version question - the new one is already wrote to package.json):
```
yarn publ
```      



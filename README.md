## Linting for WTT projects

### Cofiguration 

```
yarn add --dev @wtt-solutions/eslint-config

## Usage

Write to `.eslintrc`:

```
{
  ...
  "extends": [
    "@wtt-solutions/eslint-config",  
    "@wtt-solutions/eslint-config/react"  
  ]
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

Then run `yarn lint` to see project errors and/or configure your text editor accordingly.

## Deploy

1. Call `yarn login` in console to login into your npmjs.com account 

2. Commit & push changes

3. `yarn publish --patch --access public`

## Testing in related projects
There is a way to test new version of eslint-config without publishing it to npm:

1. Execute `npm link` inside a necessary config project root.
2. Execute `npm link @wtt-solutions/eslint-config` inside related project's root.
3. Rebuild related project if needed.
4. When finish testing run `npm unlink @wtt-solutions/eslint-config`

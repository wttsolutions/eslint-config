## Linting for WTT projects

### Cofiguration 

`yarn add --dev @macpaw/eslint-config-base`
`yarn add --dev @macpaw/eslint-config-react`

## Usage

Write to `.eslintrc`:

```
{
  "extends": [
    "@macpaw/eslint-config-base",  
    "@macpaw/eslint-config-react"  
  ]
}
```

Write to `package.json`:

```
...
"scripts": {
  ...
  "lint": "eslint src",
  "lint:fix": "eslint --fix src"  
}
```

## Deploy

1. Run one of `yarn patch`, `yarn minor`, `yarn major` scripts to bump package.json version for each package
2. [Create new release](https://github.com/MacPaw/eslint-config/releases/new)

## Testing in related projects
There is a way to test new version of eslint-config without publishing it to npm:

1. Execute `npm link` inside a necessary config project root.
2. Execute `npm link @macpaw/eslint-config-${name}` inside related project's root.
3. Rebuild related project if needed.
4. When finish testing run `npm unlink @macpaw/eslint-config-${name}`

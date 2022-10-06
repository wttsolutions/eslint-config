module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,  // for babel
  }
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    './index',     // base
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    //'react-app',   // CRA
  ],

  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',  // sometimes redundant
    'react/forbid-prop-types': 'warn',
    'react/function-component-definition': ['warn', { 'namedComponents': ['function-declaration', 'function-expression', 'arrow-function'], 'unnamedComponents': ['function-expression', 'arrow-function']}],
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-brace-presence': 'off', // not a problem to use them everywhere
    'react/jsx-curly-spacing': 'off', // sometimes different is beautiful
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',    // sometimes incorrect for nested .maps functions
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': ['warn', { 'allow': 'single-child' }],
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-wrap-multilines': 'off',   // not error and not imroves looks
    'react/no-array-index-key': 'off',   // sometimes no other way than usin indices
    'react/no-children-prop': 'off',
    'react/no-multi-comp': ['warn', { 'ignoreStateless': true }],
    'react/no-unescaped-entities': ['error', {'forbid': ['>', '}']}],  // allow quotes
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': ['warn'],
    'react/prefer-stateless-function': ['off'], // easier for markuper to improve
    'react/prop-types': ['warn', { skipUndeclared: true }], // allow no prop validation (completely only)
    'react/self-closing-comp': 'off', // sometimes component potentially growc
    'react/sort-comp': 'off',  // benefit less than afford to maintain
    'semi-spacing': 'warn',
  }
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // disable unnecessary recommended rules
    'no-console': 0,
    'no-constant-condition': 0,

    // best practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'consistent-return': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'smart'],
    'no-caller': 2,
    'no-global-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-void': 2,
    'no-unused-expressions': 2,
    'no-unsafe-negation': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
  }
};
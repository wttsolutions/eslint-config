module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,  // for babel
    ecmaFeatures: {
      'jsx': true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"]
    },
  },

  env: {
    browser: true,
    es6: true,
  },
  extends: [
    //extend  separately './config-base',
    'eslint:recommended',
    'plugin:react/recommended',
    "eslint-config-airbnb",
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
  ],
  "overrides": [
    {
      "files": ["*.jsx", "*.js"]
    }
  ],
  settings: {
    react: {
      version: '999', /* stub to aviod eslint-plugin-react warning */
    },
  },
  globals: {
    React: 'readonly'
  },
  rules: {
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    'jsx-a11y/aria-props': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/aria-unsupported-elements': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/lang': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-access-key': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-distracting-elements': 'off',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'jsx-a11y/scope': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
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
    "react/react-in-jsx-scope": "off", // not necessary nowdays
    "react/jsx-uses-react": "off",     // not necessary nowdays
    'no-unused-vars': [
      'warn', {
        'args': 'none',
        // allow import React (even if not necessary)
        'varsIgnorePattern': 'React'
      }],
  }
};

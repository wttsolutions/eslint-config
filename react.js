module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@test/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',  
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
    //'no-console': 1
  }
};
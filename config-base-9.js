const globals = require('globals');
const babelParser = require("@babel/eslint-parser")
const js = require('@eslint/js')
const importPlugin = require('eslint-plugin-import')
const noLoopsPlugin = require('eslint-plugin-no-loops')
// wait v9 support https://github.com/airbnb/javascript/issues/2961
// const airbnbBase = require('eslint-config-airbnb-base')

module.exports = [
  js.configs.recommended, //eslint:recommended
  //airbnbBase,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, // for babel
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          blockBindings: true,
          experimentalObjectRestSpread: true,
        },
      },
      globals: {
        es6: true,
        ...globals.node,
        // ...globals.browser
        __DEVELOPMENT__: "readonly"
        // '__CLIENT__': true,
        // '__SERVER__': true,
        // '__DISABLE_SSR__': true,
        // '__DEVTOOLS__': true,
        //'require': true,
        //'Promise': true,
        //'Set': true,
        //'Symbol': true,
      }
    },
    plugins: {
      import: importPlugin,
      noLoopsPlugin: noLoopsPlugin,
      errors: importPlugin.configs.errors,
      warnings: importPlugin.configs.warnings,
      // airbnbBase: airbnbBase
    },
    settings: {
      // workaround to avoid useless warning https://github.com/jsx-eslint/eslint-plugin-react/issues/1955#issuecomment-415181022
      "react": {
        "version": "999"
      },
      "import/resolver": {
        node: {
          moduleDirectory: ["node_modules", "src"],
        },
      },
      "import/ignore": [
        "node_modules",
        ".(scss|less|css)$",
        ".(yaml)$",
        "./src/utils/streamedian.min.js",
      ],
    },
    rules: {
      "array-bracket-spacing": "off", // sometimes looks better with spaces
      "arrow-body-style": "off", // not so big problem
      "arrow-parens": "off",
      "arrow-spacing": "warn",
      "brace-style": ["warn", "1tbs", { allowSingleLine: false }],
      "class-methods-use-this": "off",
      "comma-dangle": "off",
      "comma-spacing": "warn",
      "comma-style": ["error", "last"],
      "computed-property-spacing": "error",
      "consistent-this": ["error", "self"],
      "constructor-super": "error",
      curly: ["error", "multi-line"],
      "dot-notation": "off", // sometimes looks better: rates['USD']
      eqeqeq: ["warn", "smart"],
      "func-names": ["off"], // it's too lazy
      "function-paren-newline": "off",
      "getter-return": "error",
      "import/first": ["warn"], // warn, not error
      "import/no-commonjs": "off",
      "import/prefer-default-export": "off", // disagree. sometimes multiple exports ok
      indent: ["off"], //sometimes differs on editors (wrapping on long lines)
      "import/order": "warn",
      "key-spacing": "warn",
      "keyword-spacing": ["error", { overrides: { catch: { after: false } } }],
      "max-len": "off",
      "no-await-in-loop": "error",
      "no-class-assign": "error",
      "no-cond-assign": ["error", "except-parens"],
      "no-console": "warn",
      "no-continue": "off",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-extra-semi": "warn",
      "no-invalid-regexp": "error",
      "no-lonely-if": "off", // sometimes conditions are different ideologically
      "no-mixed-operators": "off", // not seems to me a big problem, no extra braces
      "no-multi-spaces": ["warn", { ignoreEOLComments: true }],
      "no-multiple-empty-lines": "off",
      "no-param-reassign": ["error", { props: false }], // allow param props assign
      "no-prototype-builtins": "off", // too specific limitation (disabled to allow o.hasOwnProperty(...)
      "no-redeclare": "error",
      "no-return-await": "error",
      "no-this-before-super": "error",
      "no-trailing-spaces": ["warn"], // warn, not error
      "no-undef": "error",
      "no-underscore-dangle": "off",
      "no-unneeded-ternary": "error",
      "no-unsafe-negation": "error",
      "no-unused-vars": ["warn", { args: "none" }],
      "no-useless-call": "error",
      "no-useless-constructor": ["warn"], // warn, not error
      "no-var": "error",
      "no-whitespace-before-property": "error",
      "object-curly-newline": "off", // seems not very critical
      "object-curly-spacing": "off",
      "object-shorthand": "off",
      "one-var": ["error", "never"],
      "padded-blocks": "off", // not so strict problem
      "prefer-arrow-callback": ["off"], // not needed strictly
      "prefer-const": ["warn"], // warn, not error
      "prefer-destructuring": "off", // sometimes old way looks better
      "prefer-regex-literals": "warn",
      "prefer-template": "off", // sometimes plus-concatenation is useful tho
      "quote-props": "off", // sometimes similar qouted looks better
      quotes: [
        "warn",
        "single",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: "off", // use no-unexpected-multiline instead
      "space-before-blocks": ["warn", "always"],
      "space-before-function-paren": "off", // no matters actually
      "space-in-paren": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off", // disabled until spaceless func named params support
      "spaced-comment": "off",
      strict: "off",
      "use-isnan": "error",
      yoda: ["error", "never"],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    },
  }
]


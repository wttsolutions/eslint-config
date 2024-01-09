module.exports = {
  env: {
    node: true,
    // browser: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    //"plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    //nw "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    //nw "prettier"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest" ,
    // https://typescript-eslint.io/linting/typed-linting
    //tsconfigRootDir: __dirname,
    project:
      true,
      //['tsconfig.json'],
      //['./packages/*/tsconfig.json', './apps/*/tsconfig.json']
  },
  rules: {
    "no-var": "error",
    "no-compare-neg-zero": "warn",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-return": "off"
  },
};

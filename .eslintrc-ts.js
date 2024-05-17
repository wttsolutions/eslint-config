module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    //extebd separately './config-base',
    "eslint:recommended",
    //"plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  plugins: [
    "@typescript-eslint",
    //nw "prettier"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest" ,
    project: true,
  },
  rules: {
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off"
  },
};

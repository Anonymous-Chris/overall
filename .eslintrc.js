module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-extra-semi": "error",
    "react/prop-types": "off",
    "comment-empty-line-before": [
      0,
      { ignore: ["after-comment", "stylelint-commands"] },
    ],
  },
  globals: {
    module: false,
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {},
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off"
  }
};
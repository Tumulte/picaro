module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:vue/essential",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  rules: {
    "no-console": 1,
    strict: 1,
    eqeqeq: 1
  },
  globals: {
    expect: true,
    cy: true
  }
};

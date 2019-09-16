module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": [1, 150],
    "consistent-return": [0],
    "no-console": [0],
    "indent": [1, "tab"],
    "react/jsx-indent": [1, "tab"],
    "no-tabs": [0],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "react/forbid-prop-types": [0],
    "camelcase": [0],
    "no-underscore-dangle": [0],
    "react/prefer-stateless-function": [0],
    "no-nested-ternary": [0],
    "operator-linebreak": [0],
    "react/jsx-one-expression-per-line": [0],
    "no-eval": [0],
    "import/prefer-default-export": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events":[0],
    "jsx-a11y/no-static-element-interactions": [0]
  },
};

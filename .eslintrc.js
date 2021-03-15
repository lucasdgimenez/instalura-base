/* eslint-disable react/react-in-jsx-scope */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-indent': ['error', 2],
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    'react/default-props-match-prop-types': [<enabled />, { allowRequiredDefaults: <boolean /> }],

  },
};

//  'react/require-default-props': [<enabled />, { forbidDefaultForRequired: <boolean>, ignoreFunctionalComponents: </boolean> }],
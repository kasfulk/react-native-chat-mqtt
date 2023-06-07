module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  allowImportingTsExtension: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'react/style-prop-object': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': ['error']
  },
};

const pkg = require('./package.json');

module.exports = {
  env: {
    browser: true,
    amd: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['react', 'react-hooks'],
  parser: 'babel-eslint',
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
  },
};

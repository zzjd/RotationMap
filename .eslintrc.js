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
    'jsx-a11y/anchor-has-content': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'no-loop-func': 'off',
    'func-names': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-shadow': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    radix: 'off',
    camelcase: 'off',
    'linebreak-style': [0, 'error', 'windows'],
  },
};

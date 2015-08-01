module.exports = {
  extends: 'eslint:recommended',

  env: {
    browser: true,
    es6: true,
    node: true
  },

  rules: {
    'global-strict': 0,
    'indent': [2, 2],
    'no-console': 2,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'quotes': [2, 'single'],
    'strict': 0
  }
}

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb/base'
  ],

  env: {
    browser: true,
    es6: true,
    node: true
  },

  rules: {
    'comma-dangle': [2, 'never'],
    'global-strict': 0,
    'indent': [2, 2, {SwitchCase: 1}],
    'no-console': 1,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'no-var': 2,
    'quotes': [2, 'single'],
    'strict': 0
  }
}

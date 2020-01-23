module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-prettier',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
  },
};

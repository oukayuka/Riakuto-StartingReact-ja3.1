module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
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

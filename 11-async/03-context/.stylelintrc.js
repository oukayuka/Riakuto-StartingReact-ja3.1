module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
    '**/*.{jsx,tsx}',
  ],
  rules: {
    'string-quotes': 'single',
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'jsx-a11y',
    'prefer-arrow',
    'prettier',
    'react',
    'react-hooks',
  ],
  root: true,
  rules: {
    // NOTE: for react-app-env.d.ts
    // https://github.com/facebook/create-react-app/issues/6560
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/setupTests.ts',
          'spec/**',
          'test/**',
          'tests/**',
          '**/__tests__/**',
          '**/*.spec.{js,jsx,ts,tsx}',
          '**/*.test.{js,jsx,ts,tsx}',
        ],
        peerDependencies: false,
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        "extensions": ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  'overrides': [
    {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off',
      },
    },
    {
      'files': ['*.jsx'],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  'settings': {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};

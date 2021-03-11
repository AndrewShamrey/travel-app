module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [    
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb/hooks',
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
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'eslint linebreak-style': 0,
    'no-param-reassign': 1,
    'react/jsx-props-no-spreading': 1,
    'no-use-before-define': 1,
    'jsx-a11y/no-autofocus': 1,
  },
};

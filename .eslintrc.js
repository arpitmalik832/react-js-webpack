// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'react-app',
    'plugin:cypress/recommended',
  ],
  plugins: [
    'css-modules',
    'flowtype',
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'cypress',
  ],
  rules: {
    // rules regarding react plugin
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    // rules regarding react-hooks plugin
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    // rules regarding css-modules plugin
    'css-modules/no-unused-class': [2, { camelCase: true }],
    'css-modules/no-undef-class': [2, { camelCase: true }],
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, { packageDir: '.' }],
    'import/prefer-default-export': 0,
    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 1,
    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 2,
    // rules regarding no-console
    'no-console': 2,
    'no-debugger': 2,
    'no-unused-vars': 2,
    'prefer-destructuring': 2,
    'func-names': 2,
  },
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@atoms', './src/components/atoms'],
          ['@molecules', './src/components/molecules'],
          ['@organisms', './src/components/organisms'],
          ['@configs', './src/configs'],
          ['@contexts', './src/contexts'],
          ['@enums', './src/enums'],
          ['@hooks', './src/hooks'],
          ['@pages', './src/pages'],
          ['@queries', './src/queries'],
          ['@routes', './src/routes'],
          ['@services', './src/services'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};

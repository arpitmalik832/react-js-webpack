// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'react-app',
  ],
  plugins: ['css-modules', 'flowtype', 'react'],
  rules: {
    // rules regarding react plugin
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    // rules regarding css-modules plugin
    'css-modules/no-unused-class': [2, { camelCase: true }],
    'css-modules/no-undef-class': [2, { camelCase: true }],
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

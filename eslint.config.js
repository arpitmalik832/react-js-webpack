import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/all.js';

export default [
  {
    ...pluginReactConfig,
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      'build/',
      'coverage',
      '.idea',
      '.vscode/*',
      'cypress/fixtures',
      'cypress/downloads',
      'cypress/videos',
      'cypress/screenshots',
    ],
  },
  pluginJs.configs.recommended,
];

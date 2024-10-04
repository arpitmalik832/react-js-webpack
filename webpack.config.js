/**
 * Webpack configuration file.
 * @file This file is saved as `webpack.config.js`.
 */
import { merge } from 'webpack-merge';

import commonConfig from './build_utils/webpack/webpack.common.mjs';
import devConfig from './build_utils/webpack/webpack.dev.mjs';
import prodConfig from './build_utils/webpack/webpack.prod.mjs';
import federationConfig from './build_utils/webpack/webpack.federation.mjs';
import bundleAnalyzerConfig from './build_utils/webpack/webpack.bundleanalyzer.mjs';
import workersConfig from './build_utils/webpack/webpack.workers.mjs';

import { ERR_NO_ENV_FLAG } from './build_utils/config/logs.mjs';
import { ENVS } from './build_utils/config/index.mjs';

/**
 * Adds additional configurations based on command line arguments.
 * @returns {Array} An array of additional webpack configurations.
 * @example
 * // To include federation and bundle analyzer configurations
 * // Run the command with federation bundleAnalyzer
 */
function addons() {
  const federation = process.argv.includes('federation');
  const bundleAnalyzer = process.argv.includes('bundleAnalyzer');

  const configs = [];
  if (federation) configs.push(federationConfig);
  if (bundleAnalyzer) configs.push(bundleAnalyzerConfig);
  return configs;
}

/**
 * Generates the webpack configuration based on the environment.
 * @returns {object} The merged webpack configuration.
 * @throws {Error} If the APP_ENV environment variable is not set.
 * @example
 * // To generate the configuration for the development environment
 * process.env.APP_ENV = 'development';
 * const config = getConfig();
 */
function getConfig() {
  if (!process.env.APP_ENV) {
    throw new Error(ERR_NO_ENV_FLAG);
  }

  let envConfig;

  switch (process.env.APP_ENV) {
    case ENVS.PROD:
    case ENVS.BETA:
    case ENVS.STG:
      envConfig = prodConfig;
      break;
    case ENVS.DEV:
    default:
      envConfig = devConfig;
  }

  return merge(commonConfig, envConfig, workersConfig, ...addons());
}

export default getConfig;

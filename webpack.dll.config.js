/**
 * Webpack configuration file.
 * @file This file is saved as `webpack.config.js`.
 */
import { merge } from 'webpack-merge';

import dllConfig from './build_utils/webpack/configs/webpack.dll.mjs';
import bundleAnalyzerConfig from './build_utils/webpack/configs/webpack.bundleanalyzer.mjs';
import getBuildStatsConfig from './build_utils/webpack/configs/webpack.buildstats.mjs';

import { ERR_NO_ENV_FLAG } from './build_utils/config/logs.mjs';

/**
 * Adds additional configurations based on command line arguments.
 * @returns {Array} An array of additional webpack configurations.
 * @example
 * // To include federation and bundle analyzer configurations
 * // Run the command with federation bundleAnalyzer
 */
function addons() {
  const addVisualizer = process.env.INCLUDE_VISUALIZER === 'true';
  const addBuildStats = process.env.INCLUDE_BUILD_STATS === 'true';

  const configs = [];
  if (addVisualizer) configs.push(bundleAnalyzerConfig('dll'));
  if (addBuildStats) configs.push(getBuildStatsConfig('dll'));
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

  return merge(dllConfig, ...addons());
}

export default getConfig;

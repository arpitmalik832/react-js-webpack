/**
 * Configuration for PostCSS.
 * @file This file is saved as `postcss.config.cjs`.
 */
const presetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [presetEnv, autoprefixer],
};

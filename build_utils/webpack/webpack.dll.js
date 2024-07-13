const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const commonPaths = require('../config/commonPaths');
const pkg = require('../../package.json');

module.exports = {
  mode: 'production',
  entry: {
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: `${commonPaths.outputPath}/${pkg.version}/dll`,
    filename: '[name].dll.js',
    library: '[name]_[fullhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: `${commonPaths.outputPath}/${pkg.version}/dll/[name]-manifest.json`,
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};

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
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: `${commonPaths.outputPath}/${pkg.version}/dll/[name]-manifest.json`,
    }),
    new TerserPlugin({
      parallel: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

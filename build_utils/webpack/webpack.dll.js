/**
 * Webpack configuration for creating a vendor bundle.
 * @file The file is saved as `build_utils/webpack/webpack.dll.js`.
 */
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

import { outputPath } from '../config/commonPaths.mjs';
import pkg from '../../package.json' with { type: 'json' };
import { ENVS } from '../config/index.mjs';

const config = {
  mode: ENVS.PROD,
  entry: {
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: `${outputPath}/${pkg.version}/dll`,
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
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || ENVS.PROD),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
    }),
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: `${outputPath}/${pkg.version}/dll/[name]-manifest.json`,
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

export default config;

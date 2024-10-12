/**
 * Webpack common configuration for both development and production environments.
 * @file The file is saved as `build_utils/webpack/webpack.common.js`.
 */
/* eslint-disable no-underscore-dangle */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

import pkg from '../../../package.json' with { type: 'json' };
import { entryPath, outputPath } from '../../config/commonPaths.mjs';
import svgrConfig from '../../../svgr.config.mjs';
import { ENVS } from '../../config/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const manifest = JSON.parse(
  readFileSync(`${outputPath}/${pkg.version}/dll/vendor-manifest.json`, 'utf8'),
);

const isBeta = process.env.APP_ENV === ENVS.BETA;
const isRelease = process.env.APP_ENV === ENVS.PROD;

const config = {
  entry: entryPath,
  output: {
    uniqueName: pkg.name,
    publicPath: '/',
    path: outputPath,
    filename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    chunkFilename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    assetModuleFilename:
      isRelease || isBeta
        ? `images/[path][contenthash:8][ext]`
        : `images/[path][name].[contenthash:8][ext]`,
    crossOriginLoading: 'anonymous',
  },
  cache: {
    type: 'filesystem',
    version: `${pkg.version}_${process.env.APP_ENV}`,
    store: 'pack',
    buildDependencies: {
      config: [__filename],
    },
  },
  devtool: isRelease || isBeta ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins:
                isRelease || isBeta
                  ? [
                      [
                        'transform-react-remove-prop-types',
                        {
                          removeImport: true,
                        },
                      ],
                    ]
                  : [],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: svgrConfig,
          },
          'url-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                mode: 'local',
                localIdentName:
                  isRelease || isBeta
                    ? '[hash:base64:5]'
                    : '[name]-[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                mode: 'local',
                localIdentName:
                  isRelease || isBeta
                    ? '[hash:base64:5]'
                    : '[name]-[local]-[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: isRelease || isBeta ? 'error' : 'warning',
    maxAssetSize: 250000,
    maxEntrypointSize: 10000000,
  },
  optimization: {
    minimize: isRelease || isBeta,
    minimizer:
      isRelease || isBeta
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  inline: false,
                  drop_console: !!isRelease,
                  dead_code: true,
                  drop_debugger: !!isRelease,
                  conditionals: true,
                  evaluate: true,
                  booleans: true,
                  loops: true,
                  unused: true,
                  hoist_funs: true,
                  keep_fargs: false,
                  hoist_vars: true,
                  if_return: true,
                  join_vars: true,
                  side_effects: true,
                  warnings: false,
                },
                mangle: true,
                output: {
                  comments: false,
                },
              },
            }),
            new CssMinimizerPlugin({
              minimizerOptions: {
                preset: [
                  'default',
                  {
                    discardComments: { removeAll: true },
                  },
                ],
              },
            }),
          ]
        : [],
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 500000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    usedExports: true,
    sideEffects: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: `./.env.${process.env.BE_ENV}`,
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      dll: `<script src="/${pkg.version}/dll/vendor.dll.js"></script>`,
    }),
    new MiniCssExtractPlugin({
      filename: `${pkg.version}/css/[name].[chunkhash:8].css`,
      chunkFilename: `${pkg.version}/css/[id].[chunkhash:8].css`,
      ignoreOrder: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/netlify',
        },
      ],
    }),
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    symlinks: false,
    cacheWithContext: false,
  },
};

export default config;

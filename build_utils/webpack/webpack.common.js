/* eslint-disable no-underscore-dangle */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const pkg = require('../../package.json');
const globals = require('../config/globals');
const commonPaths = require('../config/commonPaths');

const isRelease = process.argv.includes('release');
const removeConsoleLogs = process.argv.includes('no-console');

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    uniqueName: pkg.name,
    publicPath: '/',
    path: commonPaths.outputPath,
    filename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    chunkFilename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    assetModuleFilename: isRelease
      ? `images/[path][contenthash:8][ext]`
      : `images/[path][name].[contenthash:8][ext]`,
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // exclude node_modules
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
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
                localIdentName: isRelease
                  ? '[hash:base64:5]'
                  : '[name]-[local]-[hash:base64:5]',
              },
              sourceMap: !isRelease,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: commonPaths.scssPath,
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: isRelease ? 'error' : 'warning',
    maxAssetSize: 250000,
    maxEntrypointSize: 10000000,
  },
  optimization: {
    minimize: isRelease,
    minimizer: isRelease
      ? [
          new TerserPlugin({
            terserOptions: {
              sourceMap: true,
              compress: {
                inline: false,
                drop_console: !!removeConsoleLogs,
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
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      maxSize: 500000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
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
    sideEffects: false,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: `./.env.${process.env.NODE_ENV}`,
    }),
    new webpack.DefinePlugin({
      [globals.__ENV__]: `'${process.env.NODE_ENV}'`,
      [globals.__isRelease__]: isRelease,
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: `${pkg.version}/css/[name].[chunkhash:8].css`,
      chunkFilename: `${pkg.version}/css/[id].[chunkhash:8].css`,
      ignoreOrder: true,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: { 'process/browser': require.resolve('process/browser') },
  },
};

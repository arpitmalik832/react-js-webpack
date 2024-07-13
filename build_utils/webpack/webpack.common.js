/* eslint-disable no-underscore-dangle */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const pkg = require('../../package.json');
const globals = require('../config/globals');
const commonPaths = require('../config/commonPaths');

// eslint-disable-next-line import/no-dynamic-require
const dllManifest = require(
  `${commonPaths.outputPath}/${pkg.version}/dll/vendor-manifest.json`,
);

const isStaging = process.argv.includes('staging');
const isBeta = process.argv.includes('beta');
const isRelease = process.argv.includes('release');

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    uniqueName: pkg.name,
    publicPath: '/',
    path: commonPaths.outputPath,
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
    version: `${pkg.version}_${process.env.NODE_ENV}`,
    store: 'pack',
    buildDependencies: {
      config: [__filename],
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // exclude node_modules
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
                localIdentName:
                  isRelease || isBeta
                    ? '[hash:base64:5]'
                    : '[name]-[local]-[hash:base64:5]',
              },
              sourceMap: !isRelease && !isBeta,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isRelease && !isBeta,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isRelease && !isBeta,
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
                sourceMap: !isRelease && !isBeta,
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
      path: `./.env.${process.env.NODE_ENV}`,
    }),
    new webpack.DefinePlugin({
      [globals.__isRelease__]: isRelease,
      [globals.__isBeta__]: isBeta,
      [globals.__isStaging__]: isStaging,
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
      manifest: dllManifest,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: { 'process/browser': require.resolve('process/browser') },
    symlinks: false,
    cacheWithContext: false,
  },
};

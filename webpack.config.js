const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pkg = require('./package.json');
const commonPaths = require('./build_utils/config/commonPaths');

const isDebug = !process.argv.includes('release');

const port = process.env.PORT || 3000;

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    uniqueName: pkg.name,
    publicPath: '/',
    path: commonPaths.outputPath,
    filename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    chunkFilename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    assetModuleFilename: isDebug
      ? `images/[path][name].[contenthash:8][ext]`
      : `images/[path][contenthash:8][ext]`,
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
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: isDebug
                  ? '[name]-[local]-[hash:base64:5]'
                  : '[hash:base64:5]',
              },
              sourceMap: isDebug,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `${pkg.version}/css/[name].[chunkhash:8].css`,
      chunkFilename: `${pkg.version}/css/[id].[chunkhash:8].css`,
      ignoreOrder: true,
    }),
  ],
  devServer: {
    port,
    static: {
      directory: commonPaths.outputPath,
    },
    historyApiFallback: {
      index: 'index.html',
    },
    webSocketServer: false,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@assets': commonPaths.assetsPath,
      '@components': commonPaths.componentsPath,
      '@atoms': commonPaths.atomsPath,
      '@molecules': commonPaths.moleculesPath,
      '@organisms': commonPaths.organismsPath,
      '@configs': commonPaths.configsPath,
      '@contexts': commonPaths.contextsPath,
      '@enums': commonPaths.enumsPath,
      '@hooks': commonPaths.hooksPath,
      '@pages': commonPaths.pagesPath,
      '@queries': commonPaths.queriesPath,
      '@routes': commonPaths.routesPath,
      '@services': commonPaths.servicesPath,
      '@utils': commonPaths.utilsPath,
    },
  },
};

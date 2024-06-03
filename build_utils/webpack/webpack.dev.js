const commonPaths = require('../config/commonPaths');

const port = process.env.PORT || 3000;

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  devServer: {
    port,
    static: {
      directory: commonPaths.outputPath,
    },
    historyApiFallback: true,
    webSocketServer: false,
    hot: true,
  },
};

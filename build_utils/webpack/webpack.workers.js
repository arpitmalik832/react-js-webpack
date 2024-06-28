const { InjectManifest } = require('workbox-webpack-plugin');
const commonPaths = require('../config/commonPaths');

module.exports = {
  plugins: [
    new InjectManifest({
      swDest: `${commonPaths.outputPath}/sw.js`,
      swSrc: './public/sw.js',
      exclude: [/asset-manifest\.json$/, /\.gz$/, /src\/assets\//],
      chunks: [],
    }),
  ],
};

const fs = require('fs');
const CompressionPlugin = require('compression-webpack-plugin');
const AssetsManifest = require('webpack-assets-manifest');

const commonPaths = require('../config/commonPaths');

const isRelease = process.argv.includes('release');

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
    }),
    new AssetsManifest({
      output: `${commonPaths.outputPath}/asset-manifest.json`,
      publicPath: true,
      writeToDisk: true,
      /**
       * @description Customize function to add items to the manifest.
       * @param {object} entry The entry object.
       * @returns {boolean|object} Returns false to prevent adding items to the manifest, or the entry object.
       */
      customize: entry => {
        // You can prevent adding items to the manifest by returning false.
        if (entry.key.toLowerCase().endsWith('.map')) {
          return false;
        }
        return entry;
      },
      /**
       * @description Callback function to write chunk-manifest.json.
       * @param {object} manifest The manifest object.
       * @param {object} stats The stats object.
       */
      done: (manifest, stats) => {
        // Write chunk-manifest.json
        const chunkFileName = `${commonPaths.outputPath}/chunk-manifest.json`;
        try {
          const chunkFiles = stats.compilation.chunkGroups.reduce((acc, c) => {
            acc[c.name] = [
              ...(acc[c.name] || []),
              ...c.chunks.reduce(
                (files, cc) => [
                  ...files,
                  ...[...cc.files]
                    .filter(file => !file.endsWith('.map'))
                    .map(file => manifest.getPublicPath(file)),
                ],
                [],
              ),
            ];
            return acc;
          }, Object.create(null));
          fs.writeFileSync(chunkFileName, JSON.stringify(chunkFiles, null, 2));
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(`ERROR: Cannot write ${chunkFileName}: `, err);
          if (isRelease) process.exit(1);
        }
      },
    }),
  ],
};

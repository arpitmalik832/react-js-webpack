/**
 * Webpack Bundle Analyzer configuration.
 * @file The file is saved as `build_utils/webpack/webpack.bundleanalyzer.js`.
 */
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
    }),
  ],
};

export default config;

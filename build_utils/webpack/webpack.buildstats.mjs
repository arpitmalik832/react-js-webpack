/**
 * Webpack Build Stats configuration.
 * @file The file is saved as `build_utils/webpack/webpack.buildstats.js`.
 */
import BuildStatsPlugin from './customPlugins/BuildStats.mjs';

const timestamp = new Date().toISOString().replace(/:/g, '-');

const config = {
  plugins: [
    new BuildStatsPlugin({
      outputPath: `distInfo/main/${process.env.APP_ENV}/${timestamp}.json`,
    }),
  ],
};

export default config;

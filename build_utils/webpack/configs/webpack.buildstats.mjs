/**
 * Webpack Build Stats configuration.
 * @file The file is saved as `build_utils/webpack/webpack.buildstats.mjs`.
 */
import { BuildStatsPlugin } from '../customPlugins/BuildStats.mjs';

const timestamp = new Date().toISOString().replace(/:/g, '-');
const path = process.env.STORY_ENV
  ? `distInfo/storybook/${process.env.STORY_ENV}/buildStats`
  : `distInfo/main/${process.env.APP_ENV}/buildStats`;

const config = {
  plugins: [
    new BuildStatsPlugin({
      outputPath: `${path}/${timestamp}.json`,
    }),
  ],
};

export default config;

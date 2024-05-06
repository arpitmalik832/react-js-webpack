const { merge } = require('webpack-merge');

const commonConfig = require('./build_utils/webpack_config/webpack.common');
const devConfig = require('./build_utils/webpack_config/webpack.dev');
const prodConfig = require('./build_utils/webpack_config/webpack.prod');
const federationConfig = require('./build_utils/webpack_config/webpack.federation');
const bundleAnalyzerConfig = require('./build_utils/webpack_config/webpack.bundleanalyzer');

const logs = require('./build_utils/config/logs');

const addons = () => {
  const federation = process.argv.includes('federation');
  const bundleAnalyzer = process.argv.includes('bundleAnalyzer');

  const configs = [];
  if (federation) configs.push(federationConfig);
  if (bundleAnalyzer) configs.push(bundleAnalyzerConfig);
  return configs;
};

module.exports = env => {
  if (!env) {
    throw new Error(logs.ERR_NO_ENV_FLAG);
  }

  let envConfig;

  switch (env.env) {
    case 'prod':
      envConfig = prodConfig;
      break;
    case 'dev':
      envConfig = devConfig;
      break;
    default:
      envConfig = devConfig;
  }

  return merge(commonConfig, envConfig, ...addons());
};

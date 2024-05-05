const { merge } = require('webpack-merge');

const commonConfig = require('./build_utils/webpack_config/webpack.common');
const buildValidations = require('./build_utils/config/buildValidations');

const addons = (/* string | string[] */ arg) => {
  const addonsList = [...[arg]] // Normalize array of addons (flatten)
    .filter(Boolean); // If addons is undefined, filter it out

  return addonsList.map(addonName =>
    require(`./build_utils/webpack_config/webpack.${addonName}`),
  );
};

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./build_utils/webpack_config/webpack.${env.env}`);
  const config = [];
  config.push(merge(commonConfig, envConfig, ...addons(env.addons)));

  return config;
};

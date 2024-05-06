const chalk = require('chalk');

const ERR_NO_ENV_FLAG = chalk.red(
  'You must pass an --env.env flag into your build for webpack to work!',
);

const SERVER_STARTED_SUCCESSFULLY = port =>
  chalk.green(`Server started at ${port} successfully !!!`);

module.exports = {
  ERR_NO_ENV_FLAG,
  SERVER_STARTED_SUCCESSFULLY,
};

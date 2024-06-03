const chalk = require('chalk');

const ERR_NO_ENV_FLAG = chalk.red(
  'You must pass an --env.env flag into your build for webpack to work!',
);

/**
 * @description Returns a success message indicating that the server has started at the specified port.
 * @param {number} port The port number where the server is started.
 * @returns {string} The success message.
 * @example SERVER_STARTED_SUCCESSFULLY(8080);
 */
const SERVER_STARTED_SUCCESSFULLY = port =>
  chalk.green(`Server started at ${port} successfully !!!`);

module.exports = {
  ERR_NO_ENV_FLAG,
  SERVER_STARTED_SUCCESSFULLY,
};

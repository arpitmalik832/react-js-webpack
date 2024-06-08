import chalk from 'chalk';

// eslint-disable-next-line no-console
const log = console.log.bind(console);

// eslint-disable-next-line no-console
const errorLog = console.error.bind(console);

// eslint-disable-next-line no-console
const warnLog = console.warn.bind(console);

const logRequest = ({ method, request }) => {
  log(chalk.green(`Starting ${method} Request ->`), request);
};

const logResponse = ({ method, response }) => {
  log(chalk.green(`Returning ${method} Response ->`), response);
};

export { log, errorLog, warnLog, logRequest, logResponse };

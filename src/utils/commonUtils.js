// eslint-disable-next-line no-console
const log = console.log.bind(console);

// eslint-disable-next-line no-console
const errorLog = console.error.bind(console);

// eslint-disable-next-line no-console
const warnLog = console.warn.bind(console);

const logRequest = ({ method, request }) => {
  log(`Starting ${method} request ->`, request);
};

const errorLogRequest = ({ method, error }) => {
  errorLog(`Error while starting ${method} request ->`, error);
};

const logResponse = ({ method, response }) => {
  log(`Returning ${method} response ->`, response);
};

const errorLogResponse = ({ method, error }) => {
  errorLog(`Error while returning ${method} response ->`, error);
};

export {
  log,
  errorLog,
  warnLog,
  logRequest,
  errorLogRequest,
  logResponse,
  errorLogResponse,
};

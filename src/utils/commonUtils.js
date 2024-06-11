// eslint-disable-next-line no-console
const log = console.log.bind(console);

// eslint-disable-next-line no-console
const errorLog = console.error.bind(console);

// eslint-disable-next-line no-console
const warnLog = console.warn.bind(console);

const logRequest = ({ method, request }) => {
  log(`Starting ${method} request ->`, request);
};

const errorLogRequest = ({ method, request }) => {
  errorLog(`Error while starting ${method} request ->`, request);
};

const logResponse = ({ method, response }) => {
  errorLog(`Returning ${method} response ->`, response);
};

const errorLogResponse = ({ method, response }) => {
  errorLog(`Error while returning ${method} response ->`, response);
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

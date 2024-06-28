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

const isLocalhost = () =>
  Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
      ),
  );

export {
  log,
  errorLog,
  warnLog,
  logRequest,
  errorLogRequest,
  logResponse,
  errorLogResponse,
  isLocalhost,
};

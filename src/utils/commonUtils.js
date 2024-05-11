/**
 * To make logs to the console
 */
// eslint-disable-next-line no-console
const log = console.log.bind(console);

/**
 * To make error logs to the console
 */
// eslint-disable-next-line no-console
const errorLog = console.error.bind(console);

/**
 * To make warn logs to the console
 */
// eslint-disable-next-line no-console
const warnLog = console.warn.bind(console);

export { log, errorLog, warnLog };

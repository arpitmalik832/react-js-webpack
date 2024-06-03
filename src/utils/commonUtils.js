/**
 * @description To make logs to the console
 * @example log('Hello World!');
 */
// eslint-disable-next-line no-console
const log = console.log.bind(console);

/**
 * @description To make error logs to the console
 * @example errorLog('Hello World!');
 */
// eslint-disable-next-line no-console
const errorLog = console.error.bind(console);

/**
 * @description To make warn logs to the console
 * @example warnLog('Hello World!');
 */
// eslint-disable-next-line no-console
const warnLog = console.warn.bind(console);

export { log, errorLog, warnLog };

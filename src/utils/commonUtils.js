const log = (...args) => {
  if (!__isRelease__) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

const errorLog = (...args) => {
  if (!__isRelease__) {
    // eslint-disable-next-line no-console
    console.error(...args);
  }
};

const warnLog = (...args) => {
  if (!__isRelease__) {
    // eslint-disable-next-line no-console
    console.warn(...args);
  }
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

export { log, errorLog, warnLog, isLocalhost };

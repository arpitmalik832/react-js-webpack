import '@testing-library/jest-dom';

import {
  log,
  errorLog,
  warnLog,
  logRequest,
  logResponse,
} from '../commonUtils';

describe('test commonUtils', () => {
  const test = 'test';
  it('test the log function', () => {
    log(test);
  });

  it('test the errorLog function', () => {
    errorLog(test);
  });

  it('test the warnLog function', () => {
    warnLog(test);
  });

  it('test the logRequest', () => {
    logRequest({ method: 'get', request: 'temp1' });
  });

  it('test the logResponse', () => {
    logResponse({ method: 'get', request: 'temp1' });
  });
});

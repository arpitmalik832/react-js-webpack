import '@testing-library/jest-dom';

import {
  log,
  errorLog,
  warnLog,
  logRequest,
  logResponse,
  errorLogRequest,
  errorLogResponse,
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
    logResponse({ method: 'get', response: 'temp1' });
  });

  it('test the errorLogRequest', () => {
    errorLogRequest({ method: 'get', request: 'temp1' });
  });

  it('test the errorLogResponse', () => {
    errorLogResponse({ method: 'get', response: 'temp1' });
  });
});

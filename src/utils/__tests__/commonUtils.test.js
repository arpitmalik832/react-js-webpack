import '@testing-library/jest-dom';

import { log, errorLog, warnLog } from '../commonUtils';

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
});

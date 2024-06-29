import '@testing-library/jest-dom';

import { log, errorLog, warnLog, isLocalhost } from '../commonUtils';

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

  it('testing the isLocalHostUtil', () => {
    // Overwrite the hostname before rendering
    delete window.location;
    window.location = { hostname: 'localhost' };

    expect(isLocalhost()).toBeTruthy();
  });

  it('testing the isLocalHostUtil', () => {
    // Overwrite the hostname before rendering
    delete window.location;
    window.location = { hostname: 'example.com' };

    expect(isLocalhost()).toBeFalsy();
  });
});

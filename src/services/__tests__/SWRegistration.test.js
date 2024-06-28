import '@testing-library/jest-dom';

import SWRegistration from '../SWRegistration';
import { isLocalhost } from '../../utils/commonUtils';
import fetchMock from '../../__tests__/__mocks__/fetchMock';

jest.mock('../../configs/sw', () => ({
  __esModule: true,
  SW_URL: `/sw.js`,
  LOGS: {
    SUCCESS: 'Service Worker registered successfully',
    SW_READY: 'This web-app is being served cache-first by a service.',
    REGISTRATION_ERROR: 'Error during service worker registration ->',
    NO_INTERNET:
      'No internet connection found. App is running in offline mode.',
  },
}));

jest.mock('../../utils/commonUtils', () => ({
  __esModule: true,
  log: jest.fn(),
  errorLog: jest.fn(),
  isLocalhost: jest.fn(),
}));

jest.mock('../../utils/eventListeners/load', () => ({
  __esModule: true,
  default: {
    subscribe: jest.fn(e => e()),
    unSubscribe: jest.fn(),
  },
}));

jest.mock('../../../build_utils/config', () => ({
  __esModule: true,
  ENVS: {
    PRODUCTION: 'production',
    BETA: 'beta',
    STAGING: 'staging',
  },
}));

describe('SWRegistration unit tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('SWRegistration functions test', () => {
    SWRegistration.register();
    SWRegistration.unregister();
  });

  it('SWRegistration functions test', () => {
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn(() => Promise.resolve('xyz')),
        ready: Promise.resolve({
          unregister: jest.fn(),
        }),
      },
      editable: true,
      configurable: true,
    });

    SWRegistration.register();
    SWRegistration.unregister();
  });

  it('SWRegistration functions test with rejeting ready state', () => {
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn(() => Promise.resolve('xyz')),
        ready: Promise.reject(new Error('test')),
      },
      editable: true,
      configurable: true,
    });

    SWRegistration.register();
    SWRegistration.unregister();
  });

  it('SWRegistration functions test in case of localhost', () => {
    delete window.location;
    window.location = {
      hostname: 'localhost',
      href: 'http://localhost:3000',
      origin: 'http://localhost:3000',
    };
    window.fetch = fetchMock({
      headers: {
        get: () => 'text/javascript',
      },
    });
    isLocalhost.mockImplementation(() => true);
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn(() => Promise.reject(new Error('xyz'))),
        ready: Promise.resolve('test'),
      },
      editable: true,
      configurable: true,
    });

    SWRegistration.register();
  });

  it('SWRegistration functions test in case of localhost when fetch is throwing error', () => {
    delete window.location;
    window.location = {
      hostname: 'localhost',
      href: 'http://localhost:3000',
      origin: 'http://localhost:3000',
    };
    window.fetch = fetchMock(
      {
        headers: {
          get: () => 'text/javascript',
        },
      },
      true,
    );
    isLocalhost.mockImplementation(() => true);
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn(() => Promise.reject(new Error('xyz'))),
        ready: Promise.resolve('test'),
      },
      editable: true,
      configurable: true,
    });

    SWRegistration.register();
  });

  it('SWRegistration functions test in case of localhost when service worker is not loaded', () => {
    delete window.location;
    window.location = {
      hostname: 'localhost',
      href: 'http://localhost:3000',
      origin: 'http://localhost:3000',
      reload: jest.fn(),
    };
    window.fetch = fetchMock({
      headers: {
        get: () => 'text/json',
      },
    });
    isLocalhost.mockImplementation(() => true);
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn(() => Promise.reject(new Error('xyz'))),
        ready: Promise.resolve({
          unregister: () => Promise.resolve(true),
        }),
      },
      editable: true,
      configurable: true,
    });

    SWRegistration.register();
  });

  it('SWRegistration functions test in case of localhost with different origin', () => {
    delete window.location;
    window.location = {
      hostname: 'localhost',
      href: 'http://localhost:3000',
      origin: 'http://example.com',
    };
    window.fetch = fetchMock({
      headers: {
        get: () => 'text/javascript',
      },
    });
    isLocalhost.mockImplementation(() => true);
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn(() => Promise.reject(new Error('xyz'))),
        ready: Promise.resolve('test'),
      },
      editable: true,
      configurable: true,
    });

    SWRegistration.register();
  });
});

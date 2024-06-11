/* eslint-disable no-console */
import { renderHook, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import useApiRequest from '../useApiRequest';

jest.mock('../../utils/commonUtils', () => ({
  __esModule: true,
  logRequest: jest.fn(),
  logResponse: jest.fn(),
  errorLogRequest: jest.fn(),
  errorLogResponse: jest.fn(),
}));

describe('useApiRequest unit tests', () => {
  afterEach(cleanup);

  const axiosInstance = {
    interceptors: {
      request: {
        use: (callback, errorCallback) => {
          callback();
          errorCallback();
        },
      },
      response: {
        use: (callback, errorCallback) => {
          callback();
          errorCallback();
        },
      },
    },
    get: (x, y) => console.log(x, y),
    post: (x, y, z) => console.log(x, y, z),
    put: (x, y, z) => console.log(x, y, z),
    delete: (x, y) => console.log(x, y),
  };

  it('snapshot test', () => {
    const hook = renderHook(useApiRequest);

    expect(hook).toMatchSnapshot();
  });

  it('triggering useGetCall function', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makeGetCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
    });
  });

  it('triggering useGetCall function 2 times to test createAbortController else condition', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makeGetCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
    });

    result.current.makeGetCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
    });
  });

  it('triggering usePostCall function', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makePostCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
      body: {
        key: 'value',
      },
    });

    // expect(logRequest).toHaveBeenCalledTimes(1);
    // expect(logResponse).toHaveBeenCalledTimes(1);
  });

  it('triggering usePutCall function', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makePutCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
      body: {
        key: 'value',
      },
    });
  });

  it('triggering useDeleteCall function', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makeDeleteCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
    });
  });

  it('triggering useGetCall function with cancelRequest', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makeGetCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
    });

    result.current.cancelRequest('/todos/1');
    result.current.cancelRequest('/todos/2');
  });

  it('triggering useGetCall function with cancelAllRequests', () => {
    const { result } = renderHook(useApiRequest);

    result.current.makeGetCall({
      axiosInstance,
      url: '/todos/1',
      config: {},
    });

    result.current.cancelAllRequests();
  });
});

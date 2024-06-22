import '@testing-library/jest-dom';

import { handleRequest } from '../apiUtils';

describe('apiUtils unit test', () => {
  it('test function with proper response', async () => {
    const mockData = { data: 'test data' };

    const request = Promise.resolve({ data: mockData });
    const result = await handleRequest(request);

    expect(result).toEqual(mockData);
  });

  it('should handle Axios API error response', async () => {
    const mockError = {
      response: {
        status: 404,
        data: 'Not Found',
      },
    };

    const request = Promise.reject(mockError);
    await handleRequest(request).catch(error => {
      expect(error).toEqual(mockError);
    });
  });

  it('should handle Network Error Case', async () => {
    const mockError = {
      message: 'Not Found',
      request: {
        url: 'https://example.com/',
      },
    };

    const request = Promise.reject(mockError);
    await handleRequest(request).catch(error => {
      expect(error).toEqual(mockError);
    });
  });

  it('should handle Network Error Case', async () => {
    const mockError = {
      config: {
        mock: 'Not Found',
      },
    };

    const request = Promise.reject(mockError);
    await handleRequest(request).catch(error => {
      expect(error).toEqual(mockError);
    });
  });

  it('should handle canceled request Case', async () => {
    const mockError = { message: 'canceled' };

    const request = Promise.reject(mockError);
    await handleRequest(request).catch(error => {
      expect(error).toEqual(mockError);
    });
  });

  it('should handle Network Error Case', async () => {
    const mockError = {};

    const request = Promise.reject(mockError);
    await handleRequest(request).catch(error => {
      expect(error).toEqual(mockError);
    });
  });
});

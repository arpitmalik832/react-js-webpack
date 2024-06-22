import {
  errorLogRequest,
  errorLogResponse,
  logRequest,
  logResponse,
} from '../utils/commonUtils';
import { handleRequest } from '../utils/apiUtils';

const useApiRequest = () => {
  let abortControllers = {};

  const createAbortController = key => {
    if (!abortControllers[key]) {
      abortControllers[key] = new AbortController();
    }

    return abortControllers[key];
  };

  const addRequestInterceptor = ({ method, axiosInstance }) => {
    axiosInstance.interceptors.request.use(
      request => {
        logRequest({ method, request });
        const newRequest = { ...request };
        newRequest.metadata = { startTime: new Date() };
        return newRequest;
      },
      error => {
        errorLogRequest({ method, error });
        throw error;
      },
    );
  };

  const addResponseInterceptor = ({ method, axiosInstance }) => {
    axiosInstance.interceptors.response.use(
      response => {
        logResponse({ method, response });
        const newResponse = { ...response };
        newResponse.config.metadata.endTime = new Date();
        newResponse.responseTime =
          newResponse.config.metadata.endTime -
          newResponse.config.metadata.startTime;
        return newResponse;
      },
      error => {
        const newError = { ...error };
        newError.config.metadata.endTime = new Date();
        newError.responseTime =
          newError.config.metadata.endTime - newError.config.metadata.startTime;
        errorLogResponse({ method, error: newError });
        throw newError;
      },
    );
  };

  const makeGetCall = ({ axiosInstance, url, config }) => {
    const abortController = createAbortController(JSON.stringify(url));

    const { signal } = abortController;

    addRequestInterceptor({
      method: 'get',
      axiosInstance,
    });
    addResponseInterceptor({
      method: 'get',
      axiosInstance,
    });

    return handleRequest(
      axiosInstance.get(url, {
        ...config,
        signal,
      }),
    );
  };

  const makePostCall = ({ axiosInstance, url, config, body }) => {
    const abortController = createAbortController(JSON.stringify(url));

    const { signal } = abortController;

    addRequestInterceptor({
      method: 'post',
      axiosInstance,
    });
    addResponseInterceptor({
      method: 'post',
      axiosInstance,
    });

    return handleRequest(
      axiosInstance.post(url, body, {
        ...config,
        signal,
      }),
    );
  };

  const makePutCall = ({ axiosInstance, url, config, body }) => {
    const abortController = createAbortController(JSON.stringify(url));

    const { signal } = abortController;

    addRequestInterceptor({
      method: 'put',
      axiosInstance,
    });
    addResponseInterceptor({
      method: 'put',
      axiosInstance,
    });

    return handleRequest(
      axiosInstance.put(url, body, {
        ...config,
        signal,
      }),
    );
  };

  const makeDeleteCall = ({ axiosInstance, url, config }) => {
    const abortController = createAbortController(JSON.stringify(url));

    const { signal } = abortController;

    addRequestInterceptor({
      method: 'delete',
      axiosInstance,
    });
    addResponseInterceptor({
      method: 'delete',
      axiosInstance,
    });

    return handleRequest(
      axiosInstance.delete(url, {
        ...config,
        signal,
      }),
    );
  };

  const cancelRequest = key => {
    if (abortControllers[JSON.stringify(key)]) {
      abortControllers[JSON.stringify(key)].abort();
      delete abortControllers[JSON.stringify(key)];
    }
  };

  const cancelAllRequests = () => {
    Object.keys(abortControllers).forEach(key => {
      abortControllers[key].abort();
    });
    abortControllers = {};
  };

  return {
    makeGetCall,
    makePostCall,
    makePutCall,
    makeDeleteCall,
    cancelRequest,
    cancelAllRequests,
  };
};

export default useApiRequest;

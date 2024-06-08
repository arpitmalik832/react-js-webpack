import { logRequest, logResponse } from '../utils/commonUtils';

const useApiRequest = () => {
  let abortControllers = {};

  const createAbortController = key => {
    if (!abortControllers[key]) {
      abortControllers[key] = new AbortController();
    }

    return abortControllers[key];
  };

  const addRequestInterceptor = ({ method, axiosInstance }) => {
    axiosInstance.interceptors.request.use(request => {
      logRequest({ method, request });
      return request;
    });
  };

  const addResponseInterceptor = ({ method, axiosInstance }) => {
    axiosInstance.interceptors.response.use(response => {
      logResponse({ method, response });
      return response;
    });
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

    return axiosInstance.get(url, {
      ...config,
      signal,
    });
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

    return axiosInstance.post(url, body, {
      ...config,
      signal,
    });
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

    return axiosInstance.put(url, body, {
      ...config,
      signal,
    });
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

    return axiosInstance.delete(url, {
      ...config,
      signal,
    });
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

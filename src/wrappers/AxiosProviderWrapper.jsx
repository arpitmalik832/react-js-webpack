import { useMemo } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { API1_TIMEOUT } from '../configs/app';
import Loader from '../components/organisms/Loader';
import { AxiosContext } from '../contexts/AxiosContext';

const AxiosProviderWrapper = ({ children }) => {
  const apis = useSelector(state => state.apis);

  const api1AxiosInstance = useMemo(() => {
    if (apis.api1Host && apis.api1Headers) {
      return axios.create({
        baseUrl: apis.api1Host,
        timeout: API1_TIMEOUT,
        headers: {
          common: {
            ...apis.api1Headers,
          },
        },
      });
    }

    return null;
  }, [apis.api1Host, apis.api1Headers]);

  const axiosInstances = useMemo(
    () => ({ api1AxiosInstance }),
    [api1AxiosInstance],
  );

  if (!api1AxiosInstance) {
    return <Loader />;
  }

  return (
    <AxiosContext.Provider value={axiosInstances}>
      {children}
    </AxiosContext.Provider>
  );
};

export default AxiosProviderWrapper;

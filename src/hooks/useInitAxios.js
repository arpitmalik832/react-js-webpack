import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { updateApi1AxiosInstance } from '../redux/slices/apisSlice';
import { API1_TIMEOUT } from '../configs/app';

const useInitAxios = () => {
  const apis = useSelector(state => state.apis);
  const dispatch = useDispatch();

  useEffect(() => {
    if (apis.api1Host && apis.api1Headers) {
      dispatch(
        updateApi1AxiosInstance(
          axios.create({
            baseUrl: apis.api1Host,
            timeout: API1_TIMEOUT,
            headers: {
              common: {
                ...apis.api1Headers,
              },
            },
          }),
        ),
      );
    }
  }, [apis.api1Headers, apis.api1Host, dispatch]);
};

export default useInitAxios;

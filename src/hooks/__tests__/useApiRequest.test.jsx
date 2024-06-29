/* eslint-disable no-console */
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Provider, useSelector } from 'react-redux';

import useApiRequest from '../useApiRequest';

jest.mock('../../utils/commonUtils', () => ({
  logRequest: jest.fn(),
  logResponse: jest.fn(),
  errorLogRequest: jest.fn(),
  errorLogResponse: jest.fn(),
}));

jest.mock('../../utils/apiUtils', () => ({
  __esModule: true,
  handleRequest: jest.fn(e => e.then(res => res.data).catch(err => err)),
}));

describe('useApiRequest unit tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('snapshot test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      useApiRequest();

      return (
        <button data-testid="temp-component" type="button" onClick={() => {}}>
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('get api call test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      const apis = useSelector(state => state.apis);
      const { makeGetCall } = useApiRequest();

      return (
        <button
          data-testid="temp-component"
          type="button"
          onClick={() => {
            makeGetCall({
              axiosInstance: apis.api1AxiosInstance,
              url: 'todos/1',
            });
          }}
        >
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    fireEvent.click(component.getByTestId('temp-component'));
    fireEvent.click(component.getByTestId('temp-component'));
  });

  it('cancel get api call test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      const apis = useSelector(state => state.apis);
      const { makeGetCall, cancelRequest } = useApiRequest();

      return (
        <button
          data-testid="temp-component"
          type="button"
          onClick={() => {
            makeGetCall({
              axiosInstance: apis.api1AxiosInstance,
              url: 'todos/1',
            });
            cancelRequest('todos/1');
            cancelRequest('xyz');
          }}
        >
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    fireEvent.click(component.getByTestId('temp-component'));
  });

  it('post api call test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      const apis = useSelector(state => state.apis);
      const { makePostCall } = useApiRequest();

      return (
        <button
          data-testid="temp-component"
          type="button"
          onClick={() => {
            makePostCall({
              axiosInstance: apis.api1AxiosInstance,
              url: 'todos/1',
            });
          }}
        >
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    fireEvent.click(component.getByTestId('temp-component'));
  });

  it('cancel all api calls test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      const apis = useSelector(state => state.apis);
      const { makePostCall, cancelAllRequests } = useApiRequest();

      return (
        <button
          data-testid="temp-component"
          type="button"
          onClick={() => {
            makePostCall({
              axiosInstance: apis.api1AxiosInstance,
              url: 'todos/1',
            });
            cancelAllRequests();
          }}
        >
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    fireEvent.click(component.getByTestId('temp-component'));
  });

  it('put api call test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      const apis = useSelector(state => state.apis);
      const { makePutCall } = useApiRequest();

      return (
        <button
          data-testid="temp-component"
          type="button"
          onClick={() => {
            makePutCall({
              axiosInstance: apis.api1AxiosInstance,
              url: 'todos/1',
            });
          }}
        >
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    fireEvent.click(component.getByTestId('temp-component'));
  });

  it('delete api call test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'https://jsonplaceholder.typicode.com/',
        api1Headers: {},
        api1AxiosInstance: axios.create(),
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      const apis = useSelector(state => state.apis);
      const { makeDeleteCall } = useApiRequest();

      return (
        <button
          data-testid="temp-component"
          type="button"
          onClick={() => {
            makeDeleteCall({
              axiosInstance: apis.api1AxiosInstance,
              url: 'todos/1',
            });
          }}
        >
          Mocked
        </button>
      );
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    fireEvent.click(component.getByTestId('temp-component'));
  });
});

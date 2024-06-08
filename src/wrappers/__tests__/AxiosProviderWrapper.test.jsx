import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

import Component from '../AxiosProviderWrapper';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    create: jest.fn(() => ({ temp: 'temp' })),
  },
}));

jest.mock('../../configs/app', () => ({
  __esModule: true,
  API1_TIMEOUT: 15000,
  THEME: {
    LIGHT: 'light',
    DARK: 'dark',
  },
}));

jest.mock('../../components/organisms/Loader', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-loader" />),
}));

jest.mock('../../contexts/AxiosContext', () => ({
  __esModule: true,
  AxiosContext: {
    Provider: jest.fn(({ children }) => (
      <div data-testid="mock-axios-context-provider">{children}</div>
    )),
  },
}));

describe('AxiosProviderWrapper unit tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('AxiosProviderWrapper snapshot test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'no-url',
        api1Headers: { x: 'a' },
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const component = render(
      <Provider store={store}>
        <Component />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('tests when data is not present', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: '',
        api1Headers: {},
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Component />
      </Provider>,
    );

    expect(getByTestId('mock-loader')).toBeInTheDocument();
  });

  it('tests when data is present', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: 'no-url',
        api1Headers: { x: 'a' },
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Component />
      </Provider>,
    );

    expect(getByTestId('mock-axios-context-provider')).toBeInTheDocument();
  });
});

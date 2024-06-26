import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import useInitAxios from '../useInitAxios';

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

describe('useInitAxios unit tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('snapshot test when data is present', () => {
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

    const TempComponent = () => {
      useInitAxios();

      return <div data-testid="temp-component" />;
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('snapshot test when data is not present', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: {
        api1Host: '',
        api1Headers: null,
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
      },
    });

    const TempComponent = () => {
      useInitAxios();

      return <div data-testid="temp-component" />;
    };

    const component = render(
      <Provider store={store}>
        <TempComponent />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});

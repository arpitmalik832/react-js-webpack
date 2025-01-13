/**
 * Home Page unit tests.
 * @file This file is saved as `Home.test.jsx`.
 */
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReduxProvider } from '@arpitmalik832/react-js-rollup-library';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import Component from '../Home';
import { sampleQuery } from '../../redux/queries/sampleQuery';

jest.mock('../../components/atoms/Button', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-button" />),
}));

jest.mock('@arpitmalik832/react-js-rollup-library', () => ({
  __esModule: true,
  ...jest.requireActual('@arpitmalik832/react-js-rollup-library'),
  useBackPress: jest.fn(),
  Button: jest.fn(() => <div data-testid="mock-button" />),
}));

describe('Unit tests for Home Page', () => {
  afterEach(cleanup);

  it('snapshot test', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: [
        {
          host: 'no-url',
          headers: { x: 'a' },
          axiosInstance: axios.create(),
        },
      ],
      reducers: {
        addNewApiData: (state, action) => [...state, action.payload],
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
        sampleQuery: sampleQuery.reducer,
      },
      middleware: getDefault => getDefault().concat(sampleQuery.middleware),
    });

    const component = render(
      <ReduxProvider store={store}>
        <Component />
      </ReduxProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('no api data is present', () => {
    const apisSlice = createSlice({
      name: 'apis',
      initialState: [],
      reducers: {
        addNewApiData: (state, action) => [...state, action.payload],
      },
    });

    const store = configureStore({
      reducer: {
        apis: apisSlice.reducer,
        sampleQuery: sampleQuery.reducer,
      },
      middleware: getDefault => getDefault().concat(sampleQuery.middleware),
    });

    const component = render(
      <ReduxProvider store={store}>
        <Component />
      </ReduxProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});

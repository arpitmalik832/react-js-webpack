import { cleanup, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

import hook from '../useTheme';
import matchMediaMock from '../../__tests__/__mocks__/matchMediaMock';

jest.mock('rxjs', () => ({
  fromEvent: jest.fn(() => ({
    subscribe: jest.fn(),
  })),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => () => jest.fn()),
}));

jest.mock('../../redux/slices/appSlice', () => ({
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
}));

describe('useAppMount unit tests', () => {
  afterEach(cleanup);

  it('to match snapshot', () => {
    const renderedHook = renderHook(hook);

    expect(renderedHook).toMatchSnapshot();
  });

  it('if dark theme is enabled', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => matchMediaMock(query, true)),
    });

    renderHook(hook);
  });

  it('if light theme is enabled', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest
        .fn()
        .mockImplementation(query => matchMediaMock(query, false)),
    });

    renderHook(hook);
  });

  it('if theme changes after rendering', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest
        .fn()
        .mockImplementation(query => matchMediaMock(query, false)),
    });

    renderHook(hook);

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => matchMediaMock(query, true)),
    });
  });
});

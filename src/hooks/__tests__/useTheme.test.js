import { cleanup, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

import hook from '../useTheme';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => () => jest.fn()),
}));

jest.mock('../../redux/slices/appSlice', () => ({
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
}));

jest.mock('../../utils/eventListeners/preferredColorScheme', () => ({
  __esModule: true,
  default: {
    isDark: true,
    subscribe: jest.fn(e => e({ matches: false })),
    unSubscribe: jest.fn(),
  },
}));

describe('useAppMount unit tests', () => {
  afterEach(cleanup);

  it('to match snapshot', () => {
    const renderedHook = renderHook(hook);

    expect(renderedHook).toMatchSnapshot();
  });
});

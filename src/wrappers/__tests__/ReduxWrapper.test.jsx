import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../ReduxWrapper';

jest.mock('react-redux', () => ({
  __esModule: true,
  Provider: jest.fn(() => <div data-testid="mock-provider" />),
}));

jest.mock('../../redux/store', () => ({
  __esModule: true,
  default: {},
}));

describe('ReduxWrapper unit tests', () => {
  afterEach(cleanup);

  it('ReduxWrapper snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });
});

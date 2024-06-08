import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../AppWrapper';

jest.mock('../../App', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-app" />),
}));

jest.mock('../AxiosProviderWrapper', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => (
    <div data-testid="mock-axios-provider-wrapper">{children}</div>
  )),
}));

jest.mock('../ReduxWrapper', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => (
    <div data-testid="mock-redux-wrapper">{children}</div>
  )),
}));

describe('AppWrapper unit tests', () => {
  afterEach(cleanup);

  it('AppWrapper snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });
});

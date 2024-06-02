import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../App';

jest.mock('../components/atoms/Button', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-button">button</div>),
}));

describe('App unit tests', () => {
  afterEach(cleanup);

  test('App snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });
});

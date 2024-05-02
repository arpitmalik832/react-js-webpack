import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../App';

jest.mock('@atoms/Button', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-button" />),
}));

describe('App unit tests', () => {
  afterEach(cleanup);

  test('App snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });

  it('Button renders correctly', () => {
    const { getByTestId, container } = render(<Component />);

    expect(container.getElementsByTagName('h1')[0]).toHaveTextContent(
      'Hello from React!',
    );
    expect(getByTestId('mock-button')).toBeInTheDocument();
  });
});

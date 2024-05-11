import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../index';

describe('Button unit tests', () => {
  afterEach(cleanup);

  test('Button snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });

  it('Button renders correctly', () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('button')).toHaveTextContent('Button');
  });
});

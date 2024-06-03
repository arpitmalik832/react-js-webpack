import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../ReduxWrapper';

describe('Button unit tests', () => {
  afterEach(cleanup);

  test('Button snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });
});

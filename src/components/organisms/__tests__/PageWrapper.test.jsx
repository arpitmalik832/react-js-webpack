/**
 * PageWrapper unit tests.
 * @file The file is saved as `PageWrapper.test.jsx`.
 */
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PageWrapper from '../PageWrapper';

jest.mock('react-router', () => ({
  __esModule: true,
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: '/test',
  }),
}));

describe('PageWrapper unit tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('PageWrapper snapshot test', () => {
    const component = render(<PageWrapper />);

    expect(component).toMatchSnapshot();
  });
});

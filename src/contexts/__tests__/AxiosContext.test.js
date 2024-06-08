import { cleanup, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useAxiosInstances } from '../AxiosContext';

describe('AxiosContext unit tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('AxiosContext snapshot test', () => {
    const { result } = renderHook(useAxiosInstances);

    expect(result).toMatchSnapshot();
  });
});

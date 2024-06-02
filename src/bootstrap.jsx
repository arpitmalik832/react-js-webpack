import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ReduxWrapper from './components/atoms/ReduxWrapper';

/**
 * @description Function to mount the app
 * @param {HTMLElement} ele html element to mount the app
 * @returns {Function} a function to unmount the app on closure
 * @example mount(ele, basename)
 */
const mount = ele => {
  const root = createRoot(ele);

  root.render(
    <StrictMode>
      <ReduxWrapper>
        <App />
      </ReduxWrapper>
    </StrictMode>,
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };

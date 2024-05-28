import { createRoot } from 'react-dom/client';
import App from './App';

/**
 * @description Function to mount the app
 * @param {HTMLElement} ele html element to mount the app
 * @returns {Function} a function to unmount the app on closure
 * @example mount(ele, basename)
 */
const mount = ele => {
  const root = createRoot(ele);
  root.render(<App />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };

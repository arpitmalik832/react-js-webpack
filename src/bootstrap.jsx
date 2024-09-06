import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppProvider from './providers/AppProvider';

const mount = ele => {
  const root = createRoot(ele);

  root.render(
    <StrictMode>
      <AppProvider />
    </StrictMode>,
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };

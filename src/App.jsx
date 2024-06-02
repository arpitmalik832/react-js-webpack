import { RouterProvider } from 'react-router-dom';

import router from './routes';
import useAppMount from './hooks/useAppMount';

/**
 * @description Renders the main App component.
 * @returns {React.JSX.Element} The App
 * @example <App />
 */
const App = () => {
  useAppMount();

  return <RouterProvider router={router} />;
};

export default App;

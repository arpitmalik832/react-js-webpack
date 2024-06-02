import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';
import router from './routes';

/**
 * @description Renders the main App component.
 * @returns {React.Component} The App
 * @example <App />
 */
const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;

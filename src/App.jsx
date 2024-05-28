import { Provider } from 'react-redux';

import store from './redux/store';
import Button from './components/atoms/Button';

/**
 * @description Renders the main App component.
 * @returns {React.JSX.Element} The App
 * @example <App />
 */
const App = () => (
  <Provider store={store}>
    <Button />
  </Provider>
);

export default App;

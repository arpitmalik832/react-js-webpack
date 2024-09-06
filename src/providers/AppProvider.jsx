import { ReduxProvider } from '@arpitmalik832/react-js-rollup-monorepo-library';

import App from '../App';
import store from '../redux/store';

const AppWrapper = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

export default AppWrapper;

import { Provider } from 'react-redux';

import store from '../../../redux/store';

/**
 * @description to wrap the children in ReduxProvider
 * @param {object} root0 props
 * @param {React.JSX.Element} root0.children children
 * @returns {React.JSX.Element} return the children wrapped into the Redux Provider
 * @example
 * <ReduxWrapper>
 *  <App />
 * </ReduxWrapper>
 */
const ReduxWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxWrapper;

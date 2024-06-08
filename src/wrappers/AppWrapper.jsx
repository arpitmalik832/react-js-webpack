import App from '../App';
import AxiosProviderWrapper from './AxiosProviderWrapper';
import ReduxWrapper from './ReduxWrapper';

const AppWrapper = () => (
  <ReduxWrapper>
    <AxiosProviderWrapper>
      <App />
    </AxiosProviderWrapper>
  </ReduxWrapper>
);

export default AppWrapper;

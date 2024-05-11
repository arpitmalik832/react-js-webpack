import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
// eslint-disable-next-line react/jsx-filename-extension
root.render(<App />);

if (!__isRelease__) {
  import('./utils/reportWebVitals').then(({ default: func }) => func());
}

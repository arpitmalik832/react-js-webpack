import { onLCP, onFID, onCLS, onFCP, onTTFB } from 'web-vitals';

import { log } from './commonUtils';

/**
 * @description Reports the web vitals of the project
 */
const reportWebVitals = () => {
  onCLS(log);
  onFID(log);
  onLCP(log);
  onFCP(log);
  onTTFB(log);
};

export default reportWebVitals;

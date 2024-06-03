import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './slices/appSlice';

export default configureStore({
  reducer: {
    app: appReducer,
  },
  /**
   * @description it contains all the middlewares for the redux
   * @param {Function} getDefault this contains the default middlewares
   * @returns {object} updated middlewares
   * @example middleware(thunk);
   */
  middleware: getDefault => getDefault().concat(thunk, logger),
});

import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './slices/appSlice';
import apisReducer from './slices/apisSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    apis: apisReducer,
  },
  middleware: getDefault => getDefault().concat(thunk, logger),
});

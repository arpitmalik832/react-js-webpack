import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './slices/appSlice';
import apisReducer from './slices/apisSlice';
import sampleQuery from './query/sampleQuery';

export default configureStore({
  reducer: {
    app: appReducer,
    apis: apisReducer,
    sampleQuery: sampleQuery.reducer,
  },
  middleware: getDefault =>
    getDefault({
      serializableCheck: {
        ignoredActions: ['apis/updateApi1AxiosInstance'],
        ignoredPaths: ['apis', 'sampleQuery'],
      },
    }).concat(thunk, logger, sampleQuery.middleware),
});

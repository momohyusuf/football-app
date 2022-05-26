import { configureStore } from '@reduxjs/toolkit';
import seasonReducer from './features/seasons/seasonSlice';
import { footballInfoApi } from './services/footballInfoApi';
import { footballNewsApi } from './services/footballNewsApi';

export const store = configureStore({
  reducer: {
    season: seasonReducer,
    [footballNewsApi.reducerPath]: footballNewsApi.reducer,
    [footballInfoApi.reducerPath]: footballInfoApi.reducer,
  },
});

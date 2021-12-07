import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import configSlice from './configSlice';


const store = configureStore({
  reducer: {
   user: userSlice,
   config: configSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
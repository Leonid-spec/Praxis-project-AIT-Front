import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './slices/doctorSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

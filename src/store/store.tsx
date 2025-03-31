import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './slices/doctorSlice';
import serviceReducer from './slices/serviceSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

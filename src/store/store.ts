import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './slices/doctorSlice';
//import authReducer from './slices/authSlice'; // если есть авторизация

const store = configureStore({
  reducer: {
    doctors: doctorReducer, // Добавьте редюсер doctors сюда
    //auth: authReducer, // Это пример: если у вас есть authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

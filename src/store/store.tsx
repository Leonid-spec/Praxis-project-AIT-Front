// import { configureStore } from '@reduxjs/toolkit';
// import doctorReducer from './slices/doctorSlice';

// const store = configureStore({
//   reducer: {
//     doctors: doctorReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/reducers'; 

const store = configureStore({
  reducer: rootReducer,
});

console.log('Initial state of the store:', store.getState());

export default store;



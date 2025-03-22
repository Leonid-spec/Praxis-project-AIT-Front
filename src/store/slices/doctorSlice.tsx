import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Doctor } from "../types/doctorTypes";

// Створення інтерфейсу для стейту
interface DoctorState {
  doctors: Doctor[]; // Список лікарів
  loading: boolean;   // Стан завантаження
  error: string | null; // Помилка, якщо така є
}

// Початковий стан
const initialState: DoctorState = {
  doctors: [], 
  loading: false,
  error: null, // Початково немає помилок
};

// Створення слайсу з необхідними редюсерами
const doctorSlice = createSlice({
  name: "doctors", // Назва слайсу
  initialState, // Початковий стан
  reducers: {
    fetchDoctorsStart: (state) => {
      state.loading = true;   // Починаємо завантаження
      state.error = null;     // Очищаємо попередні помилки
    },
    fetchDoctorsSuccess: (state, action: PayloadAction<Doctor[]>) => {
      state.loading = false;  // Завершуємо завантаження
      state.doctors = action.payload; // Оновлюємо список лікарів
    },
    fetchDoctorsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;   // Завершуємо завантаження
      state.error = action.payload; // Зберігаємо помилку
    },
  },
});

// Експортуємо дії
export const { fetchDoctorsStart, fetchDoctorsSuccess, fetchDoctorsFailure } = doctorSlice.actions;

// Експортуємо редюсер слайсу
export default doctorSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Doctor } from "../types/doctorTypes";

// interface DoctorState {
//   doctors: Doctor[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: DoctorState = {
//   doctors: [],
//   loading: false,
//   error: null,
// };

// const doctorSlice = createSlice({
//   name: "doctors",
//   initialState,
//   reducers: {
//     fetchDoctorsStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchDoctorsSuccess: (state, action: PayloadAction<Doctor[]>) => {
//       state.loading = false;
//       state.doctors = action.payload;
//     },
//     fetchDoctorsFailure: (state, action: PayloadAction<string>) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchDoctorsStart, fetchDoctorsSuccess, fetchDoctorsFailure } = doctorSlice.actions;

// export default doctorSlice.reducer;

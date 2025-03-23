import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Doctor {
  id: number;
  full_name: string;
  topimage?: string;
  images?: { id: number; path: string }[];
  specialisation_de?: string;
  specialisation_en?: string;
  specialisation_ru?: string;
  description_de?: string;
  description_en?: string;
  description_ru?: string;
}

interface DoctorState {
  doctors: Doctor[];
  loading: boolean;  
  error: string | null; 
}

const initialState: DoctorState = {
  doctors: [],
  loading: false,
  error: null,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    fetchDoctorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorsSuccess(state, action: PayloadAction<Doctor[]>) {
      state.loading = false;
      state.doctors = action.payload;
    },
    fetchDoctorsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addDoctor(state, action: PayloadAction<Doctor>) {
      state.doctors.push(action.payload);
    },
    updateDoctor(state, action: PayloadAction<Doctor>) {
      const index = state.doctors.findIndex((d) => d.id === action.payload.id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    deleteDoctor(state, action: PayloadAction<number>) {
      state.doctors = state.doctors.filter((d) => d.id !== action.payload);
    },
  },
});

export const {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = doctorSlice.actions;

export default doctorSlice.reducer;

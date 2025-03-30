import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Doctor } from '../types/doctorTypes';

interface DoctorState {
  [x: string]: any;
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
    fetchActiveDoctorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchActiveDoctorsSuccess(state, action: PayloadAction<Doctor[]>) {
      state.loading = false;
      state.doctors = action.payload;
    },
    fetchActiveDoctorsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
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
    fetchDoctorByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorByIdSuccess: (state, action: PayloadAction<Doctor>) => {
      state.loading = false;
      state.selectedDoctor = action.payload;
    },
    fetchDoctorByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
  fetchActiveDoctorsStart,
  fetchActiveDoctorsSuccess,
  fetchActiveDoctorsFailure,
  fetchDoctorByIdStart,
  fetchDoctorByIdSuccess,
  fetchDoctorByIdFailure,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = doctorSlice.actions;


export default doctorSlice.reducer;

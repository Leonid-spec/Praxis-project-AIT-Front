import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDoctors, getDoctorById } from '../../api/doctorAPI';

interface Doctor {
  id: number;
  photo: string;
  degree: string;
  name: string;
  specialization: string;
  description: string;
  achievements: string[];
}

interface DoctorState {
  doctors: Doctor[];
  selectedDoctor: Doctor | null;
  loading: boolean;
}

const initialState: DoctorState = {
  doctors: [],
  selectedDoctor: null,
  loading: false,
};

// Асинхронное действие для получения всех докторов
export const fetchDoctors = createAsyncThunk<Doctor[], void>(
  'doctors/fetchDoctors',
  async () => {
    const response = await getDoctors();
    return response as Doctor[]; // Приведение к типу Doctor[]
  }
);

// Асинхронное действие для получения данных конкретного доктора
export const fetchDoctorById = createAsyncThunk<Doctor, number>(
  'doctors/fetchDoctorById',
  async (id: number) => {
    const response = await getDoctorById(id);
    if (!response) {
      throw new Error('Доктор не найден');
    }
    return response as Doctor;
  }
);

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
        state.loading = false;
      })
      .addCase(fetchDoctors.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchDoctorById.pending, (state) => {
        state.loading = true;
        state.selectedDoctor = null;
      })
      .addCase(fetchDoctorById.fulfilled, (state, action) => {
        state.selectedDoctor = action.payload;
        state.loading = false;
      })
      .addCase(fetchDoctorById.rejected, (state) => {
        state.loading = false;
        state.selectedDoctor = null;
      });
  },
});

export default doctorSlice.reducer;

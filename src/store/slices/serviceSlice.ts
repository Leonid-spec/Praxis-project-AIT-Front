import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Service {
  id: number;
  name: string;
  topimage?: string;
  images?: { id: number; path: string }[];
  description_de?: string;
  description_en?: string;
  description_ru?: string;
}


interface ServiceState {
  services: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  services: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    fetchServicesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchServicesSuccess(state, action: PayloadAction<Service[]>) {
      state.loading = false;
      state.services = action.payload;
    },
    fetchServicesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addService(state, action: PayloadAction<Service>) {
      state.services.push(action.payload);
    },
    updateService(state, action: PayloadAction<Service>) {
      const index = state.services.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.services[index] = action.payload;
      }
    },
    deleteService(state, action: PayloadAction<number>) {
      state.services = state.services.filter((s) => s.id !== action.payload);
    },
  },
});


export const {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
  addService,
  updateService,
  deleteService,
} = serviceSlice.actions;


export default serviceSlice.reducer;

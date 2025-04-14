import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceData } from "../types/serviceTypes";

interface ServiceState {
  [x: string]: any;
  services: ServiceData[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  services: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    fetchActiveServicesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchActiveServicesSuccess(state, action: PayloadAction<ServiceData[]>) {
      state.loading = false;
      state.services = action.payload;
    },
    fetchActiveServicesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchServicesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchServicesSuccess(state, action: PayloadAction<ServiceData[]>) {
      state.loading = false;
      state.services = action.payload;
    },
    fetchServicesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addService(state, action: PayloadAction<ServiceData>) {
      state.services.push(action.payload);
    },
    updateService(state, action: PayloadAction<ServiceData>) {
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
  fetchActiveServicesStart,
  fetchActiveServicesSuccess,
  fetchActiveServicesFailure,
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
  addService,
  updateService,
  deleteService,
} = serviceSlice.actions;

export default serviceSlice.reducer;

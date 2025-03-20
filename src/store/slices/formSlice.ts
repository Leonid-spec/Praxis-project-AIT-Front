import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    comment: '',
    email: '',
    phoneNumber: '',
    backupPhoneNumber: '',
  },
  language: 'de',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { setLanguage, setFormData } = formSlice.actions;
export default formSlice.reducer;

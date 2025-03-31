import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    loading: boolean;
    error: string | null;
    user: { role: string } | null;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    user: null,
};

// Асинхронная функция для входа
export const login = createAsyncThunk<
    { role: string }, // Тип успеха
    { email: string; password: string }, // Тип аргументов
    { rejectValue: string } // Тип ошибки
>(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error(await response.text());
            }
            return await response.json();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Ошибка входа');
        }
    }
);

// Асинхронная функция для регистрации
export const register = createAsyncThunk<
    { role: string }, // Тип успеха
    {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        address: string;
        phone: string;
    }, // Тип аргументов
    { rejectValue: string } // Тип ошибки
>(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error(await response.text());
            }
            return await response.json();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Ошибка регистрации');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        closeLoginModal(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<{ role: string }>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<{ role: string }>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { closeLoginModal } = authSlice.actions;
export default authSlice.reducer;

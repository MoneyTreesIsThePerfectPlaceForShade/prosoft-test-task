import {getMe, loginApi, logoutApi} from '../../shared/api/authApi';
import {AuthState, User} from './authTypes';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: AuthState = {
	error: null,
	isAuthenticated: false,
	isLoading: false,
	user: null
};

/**
 * Action для логина в приложение.
 */
export const login = createAsyncThunk(
	'auth/login',
	async (credentials: {login: string, password: string}, {rejectWithValue}) => {
		try {
			const response = await loginApi(credentials);
			return response;
		} catch (error: any) {
			return rejectWithValue(error.message || 'Login failed');
		}
	}
);

/**
 * Action для получения информации о текущем пользователе.
 */
export const getCurrentUser = createAsyncThunk(
	'auth/getCurrentUser',
	async (_, {rejectWithValue}) => {
		try {
			const user = await getMe();
			return user;
		} catch (error: any) {
			return rejectWithValue(error.message || 'Failed to get user');
		}
	}
);

/**
 * Action для выхода из приложения.
 */
export const logout = createAsyncThunk(
	'auth/logout',
	async (_, {rejectWithValue}) => {
		try {
			await logoutApi();
			return undefined;
		} catch (error: any) {
			if (error.message && error.message.includes('Unauthenticated')) {
				return;
			}

			return rejectWithValue(error.message || 'Logout failed');
		}
	}
);

export const authSlice = createSlice({
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
				state.isLoading = false;
				state.isAuthenticated = true;
				state.user = action.payload;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
				state.isAuthenticated = false;
			})
			.addCase(logout.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.isAuthenticated = false;
				state.user = null;
				state.error = null;
			})
			.addCase(logout.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(getCurrentUser.rejected, state => {
				state.isAuthenticated = false;
				state.user = null;
			});
	},
	initialState,
	name: 'auth',
	reducers: {
		clearError: state => {
			state.error = null;
		}
	}
});

export const {clearError} = authSlice.actions;

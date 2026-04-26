import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import { authSlice } from 'features/auth/authSlice';
import { booksSlice } from 'features/books/booksSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		books: booksSlice.reducer
	}
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

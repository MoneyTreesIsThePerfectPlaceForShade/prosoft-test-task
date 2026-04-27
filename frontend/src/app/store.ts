import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from 'features/auth/authSlice';
import {bookSlice} from 'features/book/bookSlice';
import {booksSlice} from 'features/books/booksSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		book: bookSlice.reducer,
		books: booksSlice.reducer
	}
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

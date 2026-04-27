import {BooksState} from './booksTypes';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getBooksApi} from 'shared/api/authApi';

const initialState: BooksState = {
	booksList: [],
	error: null,
	isLoading: false
};

/**
 * Action для получения всех книг.
 */
export const getBooks = createAsyncThunk(
	'books/getBooks',
	async (_, {rejectWithValue}) => {
		try {
			const response = await getBooksApi();
			return response;
		} catch (error: any) {
			if (error.message && error.message.includes('Unauthenticated')) {
				return;
			}

			return rejectWithValue(error.message || 'Logout failed');
		}
	}
);

export const booksSlice = createSlice({
	extraReducers: builder => {
		builder
			.addCase(getBooks.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getBooks.fulfilled, (state, action) => {
				state.isLoading = false;

				if (action.payload) {
					state.booksList = action.payload;
				}

				state.error = null;
			})
			.addCase(getBooks.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
	initialState,
	name: 'books',
	reducers: {}
});

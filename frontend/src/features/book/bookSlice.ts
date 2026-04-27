import {BookState, RestBook} from './bookTypes';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {deleteBookApi, editBookApi, getBookApi, postBookApi} from 'shared/api/authApi';

const initialState: BookState = {
	book: {
		created_at: '',
		description: '',
		id: '',
		name: '',
		publisher: ''
	},
	error: null,
	isLoading: false,
	restActionResult: ''
};

/**
 * Action для получения книги.
 */
export const getBook = createAsyncThunk(
	'book/getBook',
	async (bookId: string, {rejectWithValue}) => {
		try {
			const response = await getBookApi(bookId);
			return response;
		} catch (error: any) {
			if (error.message && error.message.includes('Unauthenticated')) {
				return;
			}

			return rejectWithValue(error.message || 'Logout failed');
		}
	}
);

/**
 * Action для отправки книги.
 */
export const postBook = createAsyncThunk(
	'book/postBook',
	async (book: Pick<RestBook, 'description' | 'name'>, {rejectWithValue}) => {
		try {
			const response = await postBookApi(book);
			return response;
		} catch (error: any) {
			if (error.message && error.message.includes('Unauthenticated')) {
				return;
			}

			return rejectWithValue(error.message || 'Logout failed');
		}
	}
);

/**
 * Action для редактирования книги.
 */
export const editBook = createAsyncThunk(
	'book/editBook',
	async (book: RestBook, {rejectWithValue}) => {
		try {
			const response = await editBookApi(book);
			return response;
		} catch (error: any) {
			if (error.message && error.message.includes('Unauthenticated')) {
				return;
			}

			return rejectWithValue(error.message || 'Logout failed');
		}
	}
);

/**
 * Action для удаления книги
 */
export const deleteBook = createAsyncThunk(
	'book/deleteBook',
	async (id: string, {rejectWithValue}) => {
		try {
			await deleteBookApi(id);
			return undefined;
		} catch (error: any) {
			if (error.message && error.message.includes('Unauthenticated')) {
				return;
			}

			return rejectWithValue(error.message || 'Logout failed');
		}
	}
);

export const bookSlice = createSlice({
	extraReducers: builder => {
		builder
			.addCase(getBook.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getBook.fulfilled, (state, action) => {
				if (action.payload) {
					state.book = action.payload;
				}

				state.isLoading = false;
				state.error = null;
			})
			.addCase(getBook.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(postBook.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(postBook.fulfilled, state => {
				state.restActionResult = 'Книга успешно добавлена';
				state.isLoading = false;
				state.error = null;
			})
			.addCase(postBook.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(editBook.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(editBook.fulfilled, (state, action) => {
				state.restActionResult = 'Книга успешно изменена';

				if (action.payload) {
					state.book = action.payload;
				}

				state.isLoading = false;
				state.error = null;
			})
			.addCase(editBook.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(deleteBook.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteBook.fulfilled, state => {
				state.book = initialState.book;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteBook.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
	initialState,
	name: 'book',
	reducers: {
		clearMsg: state => {
			state.restActionResult = '';
		}
	}
});

export const {clearMsg} = bookSlice.actions;

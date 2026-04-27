import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "features/books/booksTypes";
import { deleteBookApi, getBookApi, postBookApi } from "shared/api/authApi";
import { BookState } from "./bookTypes";

const initialState: BookState = {
  book: {
    id: '',
    name: '',
    description: '',
    publisher: '',
    created_at: ''
  },
  addBookResult: '',
  error: null,
  isLoading: false
}

export const getBook = createAsyncThunk(
  'book/getBook',
  async (bookId: string, { rejectWithValue }) => {
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

export const postBook = createAsyncThunk(
  'book/postBook',
  async (book: Pick<Book, 'name' | 'description'>, { rejectWithValue }) => {
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

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (id: string, { rejectWithValue }) => {
    try {
      await deleteBookApi(id);
      return;
    } catch (error: any) {
      if (error.message && error.message.includes('Unauthenticated')) {
        return;
      }
      return rejectWithValue(error.message || 'Logout failed');
    }
  }
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.book = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.addBookResult = 'Книга успешно добавлена';
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.book = initialState.book;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
})
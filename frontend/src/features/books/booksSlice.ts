import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBooksApi } from "shared/api/authApi";
import { Book, BooksState } from "./booksTypes";

const initialState: BooksState = {
  booksList: [],
  error: null,
  isLoading: false
}

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, { rejectWithValue }) => {
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
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.isLoading = false;
        state.booksList = action.payload;
        state.error = null;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
})
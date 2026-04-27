import {Book} from 'features/books/booksTypes';

export type ApiError = {
	message: string
};

export type LoginRequest = {
	login: string,
	password: string
};

export type Books = Book[];

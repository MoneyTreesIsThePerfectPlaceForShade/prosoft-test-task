import {Books, LoginRequest} from './types';
import {apiRequest} from './utils';
import {User} from 'features/auth/authTypes';
import {RestBook} from 'features/book/bookTypes';
import {Book} from 'features/books/booksTypes';

export const loginApi = async (credentials: LoginRequest): Promise<User> => apiRequest<User>('/api/auth/user', {
	body: JSON.stringify(credentials),
	method: 'POST'
});

export const getMe = async (): Promise<User> => apiRequest<User>('/api/me', {
	method: 'GET'
});

export const logoutApi = async (): Promise<void> => apiRequest<void>('/api/auth/logout', {
	method: 'POST'
});

export const getBooksApi = async () => apiRequest<Books>('/api/books', {
	method: 'GET'
});

export const getBookApi = async (id:string) => apiRequest<Book>(`/api/books/${id}`, {
	method: 'GET'
});

export const postBookApi = async (book: Pick<RestBook, 'description' | 'name'>) => apiRequest<Book>('/api/books', {
	body: JSON.stringify(book),
	method: 'POST'
});

export const editBookApi = async (book: RestBook) => apiRequest<Book>(`/api/books/${book.id}`, {
	body: JSON.stringify(book),
	method: 'PATCH'
});

export const deleteBookApi = async (id: string) => apiRequest<{message: string}>(`/api/books/${id}`, {
	body: JSON.stringify({id}),
	method: 'DELETE'
});

import { apiRequest } from './utils';
import { Books, LoginRequest } from './types';
import { User } from 'features/auth/authTypes';
import { Book } from 'features/books/booksTypes';
import { PostBook } from 'features/book/bookTypes';


export const loginApi = async (credentials: LoginRequest): Promise<User> => {
  return apiRequest<User>('/api/auth/user', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export const getMe = async (): Promise<User> => {
  return apiRequest<User>('/api/me', {
    method: 'GET',
  });
}

export const logoutApi = async(): Promise<void> => {
  return apiRequest<void>('/api/auth/logout', {
    method: 'POST',
  });
}

export const getBooksApi = async () => {
  return apiRequest<Books>('/api/books', {
    method: 'GET',
  });
}

export const getBookApi = async (id:string) => {
  return apiRequest<Book>(`/api/books/${id}`, {
    method: 'GET',
  });
}

export const postBookApi = async (book: PostBook) => {
  return apiRequest<Book>('/api/books', {
    method: 'POST',
    body: JSON.stringify(book)
  });
}

export const deleteBookApi = async (id: string) => {
  return apiRequest<{message: string}>(`/api/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({id})
  });
}
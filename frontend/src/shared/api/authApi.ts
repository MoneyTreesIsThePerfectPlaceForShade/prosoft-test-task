import { apiRequest } from './utils';
import { Books, LoginRequest } from './types';
import { User } from 'features/auth/authTypes';
import { Book } from 'features/books/booksTypes';


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
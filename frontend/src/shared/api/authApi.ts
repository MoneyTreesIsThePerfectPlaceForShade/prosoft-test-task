import { apiRequest } from './utils';
import { LoginRequest } from './types';
import { User } from 'features/auth/authTypes';


export async function loginApi(credentials: LoginRequest): Promise<User> {
  return apiRequest<User>('/api/auth/user', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export async function getMe(): Promise<User> {
  return apiRequest<User>('/api/me', {
    method: 'GET',
  });
}

export async function logoutApi(): Promise<void> {
  return apiRequest<void>('/api/auth/logout', {
    method: 'POST',
  });
}

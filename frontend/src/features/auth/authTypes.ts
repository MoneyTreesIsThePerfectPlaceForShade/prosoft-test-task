export type UserRole = 'user' | 'admin';

export type User = {
  login: string,
  role: UserRole,
  created_at: string
}

export type AuthState = {
  isAuthenticated: boolean,
  user: User | null,
  error: string | null,
  isLoading: boolean
}

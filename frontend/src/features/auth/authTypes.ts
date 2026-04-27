export type UserRole = 'admin' | 'user';

export type User = {
	created_at: string,
	login: string,
	role: UserRole
};

export type AuthState = {
	error: string | null,
	isAuthenticated: boolean,
	isLoading: boolean,
	user: User | null
};

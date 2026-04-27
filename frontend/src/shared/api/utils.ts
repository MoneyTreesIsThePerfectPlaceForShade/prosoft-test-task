import {ApiError} from './types';

const API_BASE_URL = 'http://localhost:8080';

export async function apiRequest<T> (
	endpoint: string,
	// eslint-disable-next-line
	options: RequestInit = {}
): Promise<T> {
	const url = `${API_BASE_URL}${endpoint}`;

	const response = await fetch(url, {
		...options,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			...options.headers
		}
	});

	if (!response.ok) {
		const error: ApiError = await response.json();

		throw error;
	}

	return response.json();
}

import {User} from 'features/auth/authTypes';

/**
 * Проверяет, является ли пользователь админом.
 * @param {User} user - объект текущего пользователя.
 * @returns {boolean} true, если пользователь админ, иначе false;
 */
export const isAdmin = (user: User) => user.role === 'admin';

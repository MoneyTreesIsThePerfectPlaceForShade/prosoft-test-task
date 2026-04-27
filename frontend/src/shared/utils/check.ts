import { User } from "features/auth/authTypes"

export const isAdmin = (user: User) => {
  return user.role === 'admin';
}
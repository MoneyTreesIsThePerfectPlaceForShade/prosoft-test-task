import { useEffect } from 'react';
import { useAppDispatch } from '../app/store';
import { getCurrentUser } from '../features/auth/authSlice';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return <>{children}</>;
};

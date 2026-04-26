import { Navigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { ProtectedRouteProps } from './types';
import { AppState } from 'app/store';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ returnUrl: location.pathname }} replace />;
  }

  return <>{children}</>;
};

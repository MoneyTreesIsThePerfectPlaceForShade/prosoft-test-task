import {ProtectedRouteProps} from './types';
import {AppState} from 'app/store';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router';

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
	const location = useLocation();
	const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate replace state={{returnUrl: location.pathname}} to="/login" />;
	}

	return <>{children}</>;
};

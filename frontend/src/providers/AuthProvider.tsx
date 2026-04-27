import {useAppDispatch} from '../app/store';
import {getCurrentUser} from '../features/auth/authSlice';
import {ReactNode, useEffect} from 'react';

export const AuthProvider = ({children}: {children: ReactNode}) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCurrentUser());
	}, [dispatch]);

	return <>{children}</>;
};

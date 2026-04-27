import {useAppDispatch, useAppSelector} from '../../app/store';
import {clearError, login} from '../../features/auth/authSlice';
import styles from './Login.module.css';
import {PageLayout} from 'components/PageLayout/PageLayout';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router';

export const Login = () => {
	const [loginData, setLoginData] = useState({
		login: '',
		password: ''
	});

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const {error, isAuthenticated, isLoading} = useAppSelector(state => state.auth);

	const returnUrl = location.state?.returnUrl || '/';

	useEffect(() => {
		if (isAuthenticated) {
			navigate(returnUrl, {replace: true});
		}
	}, [isAuthenticated, navigate, returnUrl]);

	useEffect(() => () => {
		dispatch(clearError());
	}, [dispatch]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!loginData.login || !loginData.password) {
			return;
		}

		await dispatch(login(loginData));
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<PageLayout>
			<div className={styles.container}>
				<h1 className={styles.loginText}>Вход</h1>
				{error && (
					<div className={styles.error}>
						{error}
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className={styles.loginInput}>
						<label htmlFor="login">
							Логин
						</label>
						<input
							disabled={isLoading}
							id="login"
							name="login"
							onChange={handleChange}
							type="text"
							value={loginData.login}
						/>
					</div>

					<div className={styles.loginInput}>
						<label htmlFor="password">
							Пароль
						</label>
						<input
							disabled={isLoading}
							id="password"
							name="password"
							onChange={handleChange}
							type="password"
							value={loginData.password}

						/>
					</div>
					<button
						className={styles.loginBtn}
						disabled={isLoading || !loginData.login || !loginData.password}
						type="submit"
					>
						{isLoading ? 'Вход...' : 'Войти'}
					</button>
				</form>
			</div>
		</PageLayout>
	);
};

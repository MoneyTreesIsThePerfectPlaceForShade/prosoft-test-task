import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { login, clearError } from '../../features/auth/authSlice';
import { PageLayout } from 'components/PageLayout/PageLayout';
import styles from './Login.module.css';

export const Login = () => {
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);

  const returnUrl = (location.state)?.returnUrl || '/';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(returnUrl, { replace: true });
    }
  }, [isAuthenticated, navigate, returnUrl]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.login || !loginData.password) {
      return;
    }

    await dispatch(login(loginData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
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
              id="login"
              name="login"
              type="text"
              value={loginData.login}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className={styles.loginInput}>
            <label htmlFor="password">
              Пароль
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
              disabled={isLoading}

            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !loginData.login || !loginData.password}
            className={styles.loginBtn}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

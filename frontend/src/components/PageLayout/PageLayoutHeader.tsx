import {HeaderMenu} from 'components/HeaderMenu/HeaderMenu';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
import {useAppDispatch, useAppSelector} from '../../app/store';
import {logout} from '../../features/auth/authSlice';
import {useNavigate} from 'react-router';
import {useTheme} from 'shared/hooks/useTheme';
import {Icon} from 'shared/components/Icon/Icon';
import {logoutIcon} from 'shared/icons/icons';
import cn from 'classnames';
import styles from './PageLayoutHeader.module.css';

export const PageLayoutHeader = () => {
	const {theme} = useTheme();

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isLoading, user, isAuthenticated } = useAppSelector((state) => state.auth);

	const handleLogout = async () => {
		try {
			await dispatch(logout()).unwrap();
			navigate('/login');
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	const buttonStyles = cn({
		[styles.logout_container]: true,
		[styles.logout_dark]: theme === 'dark',
		[styles.logout_light]: theme === 'light'
	});

	const iconStyles = cn({
		[styles.icon]: true,
		[styles.iconDark]: theme === 'dark',
		[styles.iconLight]: theme === 'light'
	});

	return (
		<header className={styles.container}>
			<span className={styles.themeToggle}>
				<ToggleTheme />
				{isAuthenticated && user && (
					<div className={buttonStyles}>
						<button
							onClick={handleLogout}
							disabled={isLoading}
							className={styles.logout}
							>
								<span className={iconStyles}>
									<Icon color="currentColor" height="3rem" icon={logoutIcon} width="3rem" />
								</span>
						</button>
					</div>
				)}
			</span>
			{isAuthenticated && user && (
				<span className={styles.menu}>
					<HeaderMenu />
				</span>
			)}
		</header>
	);
};

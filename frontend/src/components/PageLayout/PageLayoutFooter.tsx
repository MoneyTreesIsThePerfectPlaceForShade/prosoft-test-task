import styles from './PageLayoutFooter.module.css';
import cn from 'classnames';
import {useTheme} from 'shared/hooks/useTheme';

export const PageLayoutFooter = () => {
	const {theme} = useTheme();

	const compStyles = cn({
		[styles.container]: true,
		[styles.dark]: theme === 'dark',
		[styles.light]: theme === 'light'
	});

	// TODO: вставить ссылки на GH и другие ресурсы
	return (
		<footer className={compStyles}>
			<div className={styles.credits}>Разработка и дизайн © Матвей Скоморохов</div>
		</footer>
	);
};

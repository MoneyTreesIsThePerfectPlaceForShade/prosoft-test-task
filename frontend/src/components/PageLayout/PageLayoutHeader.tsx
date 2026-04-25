import styles from './PageLayoutHeader.module.css';
import {HeaderMenu} from 'components/HeaderMenu/HeaderMenu';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';

export const PageLayoutHeader = () => {
	console.log();

	return (
		<header className={styles.container}>
			<span className={styles.themeToggle}>
				<ToggleTheme />
			</span>
			<span className={styles.menu}>
				<HeaderMenu />
			</span>
		</header>
	);
};

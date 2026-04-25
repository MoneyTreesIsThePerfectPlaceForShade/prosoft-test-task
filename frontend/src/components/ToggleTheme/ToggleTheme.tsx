import styles from './ToggleTheme.module.css';
import cn from 'classnames';
import {useRef, useState} from 'react';
import {Icon} from 'shared/components/Icon/Icon';
import {useTheme} from 'shared/hooks/useTheme';
import {darkModeIcon, lightModeIcon} from 'shared/icons/icons';

export const ToggleTheme = () => {
	const {theme, toggleTheme} = useTheme();
	const [icon, setIcon] = useState(theme === 'light'
		? <Icon color="currentColor" height="3rem" icon={lightModeIcon} width="3rem" />
		: <Icon color="currentColor" height="3rem" icon={darkModeIcon} width="3rem" />);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		buttonRef.current?.classList.add(styles.animation);

		setTimeout(() => {
			toggleTheme();
			setIcon(theme === 'light'
				? <Icon color="currentColor" height="3rem" icon={darkModeIcon} width="3rem" />
				: <Icon color="currentColor" height="3rem" icon={lightModeIcon} width="3rem" />);
		}, 1000);

		setTimeout(() => {
			buttonRef.current?.blur();
			buttonRef.current?.classList.remove(styles.animation);
		}, 2000);
	};

	const containerStyles = cn({
		[styles.container]: true,
		[styles.container_dark]: theme === 'dark',
		[styles.container_light]: theme === 'light'
	});

	const iconStyles = cn({
		[styles.icon]: true,
		[styles.iconDark]: theme === 'dark',
		[styles.iconLight]: theme === 'light'
	});

	return (
		<div className={containerStyles}>
			<button
				className={styles.switchThemeButton}
				onClick={handleClick}
				ref={buttonRef}
			>
				<span className={iconStyles}>
					{icon}
				</span>
			</button>
		</div>
	);
};

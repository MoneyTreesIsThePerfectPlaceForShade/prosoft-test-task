import styles from './PageLayout.module.css';
import {Props} from './types';
import cn from 'classnames';
import {PageLayoutFooter} from 'components/PageLayout/PageLayoutFooter';
import {PageLayoutHeader} from 'components/PageLayout/PageLayoutHeader';
import {useCallback, useLayoutEffect, useRef} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

/**
 * Компонент-обёртка для формирования шапки и подвала страницы.
 * Также проверяет авторизацию пользователя.
 */
export const PageLayout = ({children}: Props) => {
	const {theme} = useTheme();
	const refEl = useRef<HTMLDivElement>(null);

	const setLightThemeColor = useCallback((element: HTMLElement | null) => {
		element?.style.setProperty('--app-background-right', '#708d9a');
		element?.style.setProperty('--app-background-left', '#314158');
	}, []);

	const setDarkThemeColor = useCallback((element: HTMLElement | null) => {
		element?.style.setProperty('--app-background-right', '#5A6679');
		element?.style.setProperty('--app-background-left', '#1D2734');
	}, []);

	useLayoutEffect(() => {
		if (refEl.current?.style) {
			theme === 'light'
				? setLightThemeColor(refEl.current)
				: setDarkThemeColor(refEl.current)
			;
		}
	}, [theme, setLightThemeColor, setDarkThemeColor]);

	const compStyles = cn({
		[styles.container]: true,
		[styles.dark]: theme === 'dark',
		[styles.light]: theme === 'light'
	});

	// TODO: сделать проверку авторизации пользака
	return (
		<div className={compStyles} ref={refEl}>
			<PageLayoutHeader />
			<main className={styles.content}>{children}</main>
			<PageLayoutFooter />
		</div>
	);
};

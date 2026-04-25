import {ReactElement} from 'react';

export type Props = {
	/**
	 * Цвет иконки.
	 * Может быть `currentColor`.
	 */
	color: string,
	/**
	 * Высота иконки.
	 * Если не в пикселях, то указывается с единицой измерения.
	 */
	height: string,
	/**
	 * `path` иконки, можно посмотреть в `icons.tsx`.
	 */
	icon: ReactElement,
	/**
	 * Ширина иконки.
	 * Если не в пикселях, то указывается с единицой измерения.
	 */
	width: string
};

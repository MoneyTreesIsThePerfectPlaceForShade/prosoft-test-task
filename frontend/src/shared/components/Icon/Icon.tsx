import {Props} from './types';

/**
 * Моя реализация иконок в приложении, чтобы можно было задавать размер и цвет.
 * Реализовать пришлось ради более удобного и централизованного указания размера.
 * Если бы мне потребовался только цвет, я бы ограничился `currentColor`.
 */
export const Icon = ({color, height, icon, width}: Props) => (
	<svg fill={color} height={height} viewBox="0 -960 960 960" width={width} xmlns="http://www.w3.org/2000/svg">
		{icon}
	</svg>
);

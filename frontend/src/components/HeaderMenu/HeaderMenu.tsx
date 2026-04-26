import styles from './HeaderMenu.module.css';
import cn from 'classnames';
import {HeaderMenuTile} from 'components/HeaderMenuTile/HeaderMenuTile';

/**
 * Компонент для отображения верхнего меню.
 * TODO: сделать адаптив.
 */
export const HeaderMenu = () => {
	const menuTiles = [
		{order: 1, page: '/books', title: 'Список книг'},
		{order: 0, page: '/', title: 'Дом'}
	].sort((firstTile, secondTile) => firstTile.order - secondTile.order);

	const containerStyles = cn({
		[styles.container]: true
	});

	return (
		<div className={containerStyles}>
			{menuTiles.map(tile => <HeaderMenuTile key={tile.order} tile={tile} />)}
		</div>
	);
};

import styles from './HeaderMenu.module.css';
import {HeaderMenuTile} from 'components/HeaderMenuTile/HeaderMenuTile';

/**
 * Компонент для отображения верхнего меню.
 */
export const HeaderMenu = () => {
	const menuTiles = [
		{order: 1, page: '/books', title: 'Список книг'},
		{order: 0, page: '/', title: 'Дом'}
	].sort((firstTile, secondTile) => firstTile.order - secondTile.order);

	return (
		<div className={styles.container}>
			{menuTiles.map(tile => <HeaderMenuTile key={tile.order} tile={tile} />)}
		</div>
	);
};

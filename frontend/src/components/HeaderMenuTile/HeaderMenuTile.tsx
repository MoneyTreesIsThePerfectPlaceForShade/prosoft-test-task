import styles from './HeaderMenuTile.module.css';
import {Props} from './types';
import {Link} from 'react-router';

/**
 * Компонент для отображения плитки меню.
 */
export const HeaderMenuTile = ({tile}: Props) => (
	<div className={styles.container}>
		<Link to={tile.page}>{tile.title}</Link>
	</div>
);

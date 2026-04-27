import styles from './Book.module.css';
import {useAppSelector} from 'app/store';
import cn from 'classnames';
import {DeleteBook} from 'components/DeleteBook/DeleteBook';
import {EditBook} from 'components/EditBook/EditBook';
import {PageLayout} from 'components/PageLayout/PageLayout';
import {useTheme} from 'shared/hooks/useTheme';
import {isAdmin} from 'shared/utils/check';

export const Book = () => {
	const {theme} = useTheme();

	const {user} = useAppSelector(state => state.auth);
	const {book: {description, id, name, publisher}} = useAppSelector(state => state.book);

	const containerStyles = cn({
		[styles.container]: true,
		[styles.containerDark]: theme === 'dark',
		[styles.containerLight]: theme === 'light'
	});

	const blockStyles = cn({
		[styles.block]: true,
		[styles.blockDark]: theme === 'dark',
		[styles.blockLight]: theme === 'light'
	});

	const renderAdminPanel = () => !!user && isAdmin(user)
		? (
			<div>
				<EditBook id={id} />
				<DeleteBook id={id} />
			</div>
		)
		: null;

	return (
		<PageLayout>
			<div className={containerStyles}>
				<span className={blockStyles}>
					<b>Название</b>
					<div>{name}</div>
				</span>
				<span className={blockStyles}>
					<b>Описание</b>
					<div>{description}</div>
				</span>
				<span className={blockStyles}>
					<b>Автор публикации</b>
					<div>{publisher}</div>
				</span>
				{renderAdminPanel()}
			</div>
		</PageLayout>
	);
};

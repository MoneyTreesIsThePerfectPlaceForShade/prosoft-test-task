import styles from './DeleteBooks.module.css';
import {Props} from './types';
import {useAppDispatch} from 'app/store';
import cn from 'classnames';
import {deleteBook} from 'features/book/bookSlice';
import {useNavigate} from 'react-router';
import {useTheme} from 'shared/hooks/useTheme';

export const DeleteBook = ({id}: Props) => {
	const {theme} = useTheme();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleDelete = async () => {
		await dispatch(deleteBook(id));
		navigate('/books', {replace: true});
	};

	const buttonStyles = cn({
		[styles.deleteBookBtn]: true,
		[styles.deleteBookBtnDark]: theme === 'dark',
		[styles.deleteBookBtnLight]: theme === 'light'
	});

	return <button className={buttonStyles} onClick={handleDelete}>Удалить книгу</button>;
};

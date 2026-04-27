import styles from './Books.module.css';
import {useAppDispatch, useAppSelector} from 'app/store';
import {PageLayout} from 'components/PageLayout/PageLayout';
import {getBooks} from 'features/books/booksSlice';
import {useEffect} from 'react';
import {Link} from 'react-router';

export const Books = () => {
	const dispatch = useAppDispatch();

	const {booksList} = useAppSelector(state => state.books);

	useEffect(() => {
		dispatch(getBooks());
	}, [dispatch]);

	const renderBooksList = () => booksList.map(el => (
		<div className={styles.link} key={el.id}>
			<Link to={el.id}>{el.name}</Link>
		</div>
	));

	return (
		<PageLayout>
			<div className={styles.container}>
				<h2>Каталог книг</h2>
				{renderBooksList()}
			</div>
		</PageLayout>
	);
};

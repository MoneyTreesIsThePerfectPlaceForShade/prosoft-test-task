import styles from './AddBook.module.css';
import {useAppDispatch, useAppSelector} from 'app/store';
import {clearMsg, postBook} from 'features/book/bookSlice';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';

export const AddBook = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const dispatch = useAppDispatch();
	const message = useAppSelector(state => state.book.restActionResult);

	useEffect(() => () => {
		dispatch(clearMsg());
	}, [dispatch]);

	const handleChangeName = ({target}: ChangeEvent<HTMLInputElement>) => {
		setName(target.value);
	};

	const handleChangeDesc = ({target}: ChangeEvent<HTMLInputElement>) => {
		setDescription(target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!name || !description) {
			return;
		}

		dispatch(postBook({description, name}));
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<div className={styles.inputBlock}>
				<label htmlFor="name">Название</label>
				<input id="name" onChange={handleChangeName} type="text" />
			</div>
			<div className={styles.inputBlock}>
				<label htmlFor="description">Описание</label>
				<input id="description" onChange={handleChangeDesc} type="text" />
			</div>
			<button
				className={styles.addBtn}
				disabled={!name || !description}
				type="submit"
			>
				Добавить книгу
			</button>
			{message ? <div className={styles.message}>{message}</div> : null}
		</form>
	);
};

import styles from './EditBook.module.css';
import {Props} from './types';
import {useAppDispatch, useAppSelector} from 'app/store';
import cn from 'classnames';
import {clearMsg, editBook} from 'features/book/bookSlice';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

export const EditBook = ({descriptionBook, id, nameBook}: Props) => {
	const [name, setName] = useState(nameBook.trim());
	const [description, setDescription] = useState(descriptionBook.trim());

	const {theme} = useTheme();

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

		if (!name.trim() || !description.trim()) {
			return;
		}

		dispatch(editBook({description, id, name}));
	};

	const buttonStyles = cn({
		[styles.editBookBtn]: true,
		[styles.editBookBtnDark]: theme === 'dark',
		[styles.editBookBtnLight]: theme === 'light'
	});

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<div className={styles.inputBlock}>
				<label htmlFor="name">Название</label>
				<input id="name" onChange={handleChangeName} type="text" value={name} />
			</div>
			<div className={styles.inputBlock}>
				<label htmlFor="description">Описание</label>
				<input id="description" onChange={handleChangeDesc} type="text" value={description} />
			</div>
			{message ? <div className={styles.message}>{message}</div> : null}
			<button
				className={buttonStyles}
				disabled={!name.trim() || !description.trim()}
				type="submit"
			>
				Отредактировать книгу
			</button>
		</form>
	);
};

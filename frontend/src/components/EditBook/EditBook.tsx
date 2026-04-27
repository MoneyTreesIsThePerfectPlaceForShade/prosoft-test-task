import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/store";
import { editBook } from "features/book/bookSlice";
import { Props } from "./types";
import { useTheme } from "shared/hooks/useTheme";
import cn from 'classnames';
import styles from './EditBook.module.css';

export const EditBook = ({id}: Props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const {theme} = useTheme();

  const dispatch = useAppDispatch();
  const message = useAppSelector(state => state.book.restActionResult);

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

    dispatch(editBook({name, description, id}));
  }

  const buttonStyles = cn({
    [styles.editBookBtn]: true,
    [styles.editBookBtnLight]: theme === 'light',
    [styles.editBookBtnDark]: theme === 'dark'
  });
  
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputBlock}>
        <label htmlFor="name">Название</label>
        <input id="name" type="text" onChange={handleChangeName}/>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="description">Описание</label>
        <input id="description" type="text" onChange={handleChangeDesc}/>
      </div>
      {message ? <div className={styles.message}>{message}</div> : null}
      <button 
        type="submit" 
        className={buttonStyles}
        disabled={!name || !description}
      >
        Отредактировать книгу
      </button>
    </form>
  )
}
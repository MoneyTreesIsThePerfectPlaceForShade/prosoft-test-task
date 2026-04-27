import { ChangeEvent, FormEvent, useState } from "react";
import styles from './AddBook.module.css';
import { useAppDispatch } from "app/store";
import { postBook } from "features/book/bookSlice";

export const AddBook = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

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

    dispatch(postBook({name, description}));
  }
  
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
      <button 
        type="submit" 
        className={styles.addBtn}
        disabled={!name || !description}
      >
        Добавить книгу
      </button>
    </form>
  )
}
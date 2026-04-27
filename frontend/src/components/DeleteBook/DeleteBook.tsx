import cn from 'classnames';
import styles from './DeleteBooks.module.css';
import { useTheme } from 'shared/hooks/useTheme';
import { Props } from './types';
import { useAppDispatch } from 'app/store';
import { deleteBook } from 'features/book/bookSlice';
import { useNavigate } from 'react-router';

export const DeleteBook = ({id}: Props) => {
  const {theme} = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    await dispatch(deleteBook(id));
    navigate('/books', { replace: true });
  }

  const buttonStyles = cn({
    [styles.deleteBookBtn]: true,
    [styles.deleteBookBtnLight]: theme === 'light',
    [styles.deleteBookBtnDark]: theme === 'dark'
  });

  return <button onClick={handleDelete} className={buttonStyles}>Удалить книгу</button>;
}
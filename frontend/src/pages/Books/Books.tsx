import { useAppDispatch, useAppSelector } from "app/store";
import { PageLayout } from "components/PageLayout/PageLayout";
import { getBooks } from "features/books/booksSlice";
import { useEffect } from "react"
import { Link } from "react-router";
import styles from './Books.module.css'

export const Books = () => {
  const dispatch = useAppDispatch();

  const {booksList} = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks())
  }, []);

  const renderBooksList = () => {
    return booksList.map((el) => {
      return (
        <div key={el.id} className={styles.link}>
          <Link to={el.id}>{el.name}</Link>
        </div>
      )
    });
  };


  return (
    <PageLayout>
      <div>
        <h2>Каталог книг</h2>
        {renderBooksList()}
      </div>
    </PageLayout>
  )
}

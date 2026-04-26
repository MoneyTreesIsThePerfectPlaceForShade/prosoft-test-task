import { useAppDispatch, useAppSelector } from "app/store";
import { Book } from "components/Book/Book";
import { PageLayout } from "components/PageLayout/PageLayout";
import { getBooks } from "features/books/booksSlice";
import { useEffect } from "react"

export const Books = () => {
  const dispatch = useAppDispatch();

  const {booksList} = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks())
  }, []);

  const renderBooksList = () => {
    return booksList.map((el) => {
      return (
        <div key={el.id}>
          <Book name={el.name} description={el.description} publisher={el.publisher}/>
        </div>
      )
    });
  };


  return (
    <PageLayout>
      {renderBooksList()}
    </PageLayout>
  )
}

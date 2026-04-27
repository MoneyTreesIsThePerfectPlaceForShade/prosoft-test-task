import { Book } from "features/books/booksTypes"

export type BookState = {
  addBookResult: string,
  book: Book,
  error: string | null,
  isLoading: boolean
}

export type PostBook = Pick<Book, 'name' | 'description'>;
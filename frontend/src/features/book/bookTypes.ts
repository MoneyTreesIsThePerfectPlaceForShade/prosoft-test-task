import { Book } from "features/books/booksTypes"

export type BookState = {
  restActionResult: string,
  book: Book,
  error: string | null,
  isLoading: boolean
}

export type RestBook = Pick<Book, 'name' | 'description' | 'id'>;
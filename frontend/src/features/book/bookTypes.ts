import { Book } from "features/books/booksTypes"

export type BookState = {
  book: Book,
  error: string | null,
  isLoading: boolean
}
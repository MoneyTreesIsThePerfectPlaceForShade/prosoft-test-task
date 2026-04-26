export type Book = {
  id: string,
  name: string,
  description: string,
  publisher: string,
  created_at: string
}

export type BooksState = {
  booksList: Book[],
  error: string | null,
  isLoading: boolean
}
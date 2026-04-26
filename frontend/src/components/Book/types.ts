import { Book } from "features/books/booksTypes";

export type Props = Pick<Book, 'name' | 'description' | 'publisher'>;
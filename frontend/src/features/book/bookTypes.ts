import {Book} from 'features/books/booksTypes';

export type BookState = {
	book: Book,
	error: string | null,
	isLoading: boolean,
	restActionResult: string
};

export type RestBook = Pick<Book, 'description' | 'id' | 'name'>;

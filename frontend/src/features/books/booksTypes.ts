export type Book = {
	created_at: string,
	description: string,
	id: string,
	name: string,
	publisher: string
};

export type BooksState = {
	booksList: Book[],
	error: string | null,
	isLoading: boolean
};

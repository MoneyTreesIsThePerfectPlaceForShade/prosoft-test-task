import {Error} from 'pages/Error/Error';
import {Home} from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import {createBrowserRouter} from 'react-router';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { Books } from 'pages/Books/Books';
import { Book } from 'pages/Book/Book';
import { getBook } from 'features/book/bookSlice';
import { store } from './store';

export const router = createBrowserRouter([
	{
		element: <Login />,
		path: '/login'
	},
	{
		element: <ProtectedRoute><Home /></ProtectedRoute>,
		path: '/'
	},
	{
		element: <ProtectedRoute><Books /></ProtectedRoute>,
		path: '/books'
	},
  {
		loader: async ({ params }) => {
			if (params.id) {
				const book = await store.dispatch(getBook(params.id));
				return book;
			}
			return;
  	},
    element: <ProtectedRoute><Book /></ProtectedRoute>,
    path: '/books/:id',
  },
	{
		element: <Error />,
		path: '*'
	}
]);

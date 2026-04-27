import {store} from './store';
import {ProtectedRoute} from 'components/ProtectedRoute';
import {getBook} from 'features/book/bookSlice';
import {Book} from 'pages/Book/Book';
import {Books} from 'pages/Books/Books';
import {Error} from 'pages/Error/Error';
import {Home} from 'pages/Home/Home';
import {Login} from 'pages/Login/Login';
import {createBrowserRouter} from 'react-router';

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
		element: <ProtectedRoute><Book /></ProtectedRoute>,
		loader: async ({params}) => {
			if (params.id) {
				const book = await store.dispatch(getBook(params.id));
				return book;
			}

			return undefined;
		},
		path: '/books/:id'
	},
	{
		element: <Error />,
		path: '*'
	}
]);

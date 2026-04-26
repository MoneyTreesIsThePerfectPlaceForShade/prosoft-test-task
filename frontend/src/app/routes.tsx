import {Error} from 'pages/Error/Error';
import {Home} from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import {createBrowserRouter} from 'react-router';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { Books } from 'pages/Books/Books';

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
		element: <Error />,
		path: '*'
	}
]);

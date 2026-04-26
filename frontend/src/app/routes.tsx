import {Error} from 'pages/Error/Error';
import {Home} from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import {Music} from 'pages/Music/Music';
import {createBrowserRouter} from 'react-router';
import { ProtectedRoute } from 'components/ProtectedRoute';

export const router = createBrowserRouter([
	{
		element: <Login />,
		path: '/login'
	},
	{
		element: <ProtectedRoute><Music /></ProtectedRoute>,
		path: '/music'
	},
	{
		element: <ProtectedRoute><Home /></ProtectedRoute>,
		path: '/'
	},
	{
		element: <Error />,
		path: '*'
	}
]);

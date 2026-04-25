import {Error} from 'pages/Error/Error';
import {Home} from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import {Music} from 'pages/Music/Music';
import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
	{
		element: <Login />,
		path: '/'
	},
	{
		element: <Music />,
		path: '/music'
	},
	{
		element: <Error />,
		path: '*'
	}
]);

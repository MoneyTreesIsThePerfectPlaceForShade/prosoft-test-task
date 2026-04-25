import './main.module.css';
import {router} from 'app/routes';
import {store} from 'app/store';
import {ThemeProvider} from 'providers/ThemeProvider';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router/dom';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</Provider>
);

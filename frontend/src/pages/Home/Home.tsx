import style from './Home.module.css';
import {MainMenu} from 'components/MainMenu/MainMenu';
import {PageLayout} from 'components/PageLayout/PageLayout';
import {useEffect, useState} from 'react';

const useForceUpdate = () => {
	const [, setCount] = useState(0);
	return () => setCount(v => v + 1);
};

export const Home = () => {
	const forceUpdate = useForceUpdate();

	console.log('Updated');

	return (
		<PageLayout>
			<div data-testid="app">
				<MainMenu />
				<button onClick={forceUpdate}>Force update</button>
			</div >
		</PageLayout>
	);
};

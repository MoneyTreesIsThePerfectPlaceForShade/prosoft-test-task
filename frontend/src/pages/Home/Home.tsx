import {PageLayout} from 'components/PageLayout/PageLayout';

export const Home = () => {
	console.log('Updated');

	return (
		<PageLayout>
			<div data-testid="app">
				Just Hell-o
			</div >
		</PageLayout>
	);
};

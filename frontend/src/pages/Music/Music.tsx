import {Custom} from 'components/Custom/Custom';
import {PageLayout} from 'components/PageLayout/PageLayout';
import {getHeroes} from 'pages/Music/helpers';
import {useCallback, useEffect, useState} from 'react';
import {debounce} from 'shared/utils/optimization';

export const Music = () => {
	console.log();

	const [searchHeroe, setSearchHeroe] = useState('');
	const [heroes, setHeroes] = useState<{id: number, name: string}[]>([]);

	const fetchHeroes = useCallback(debounce(async (query: string, signal: AbortSignal) => {
		try {
			const data = await getHeroes(query, signal);

			setHeroes(data);
		} catch (e) {
			console.log('Отменился запрос', e);
		}
	}), []);

	useEffect(() => {
		if (!searchHeroe) {
			setHeroes([]);
			return;
		}

		const controller = new AbortController();
		const signal = controller.signal;

		fetchHeroes(searchHeroe, signal);

		return () => {
			controller.abort();
		};
	}, [searchHeroe, fetchHeroes]);

	const renderHeroes = () => {
		if (heroes?.length) {
			return heroes.map(heroe => <div key={heroe.id}>{heroe.name}</div>);
		}

		return null;
	};

	return (
		<PageLayout>
			<input onChange={e => setSearchHeroe(e.target.value)} type="text" />
			{renderHeroes()}
			<Custom />
		</PageLayout>
	);
};

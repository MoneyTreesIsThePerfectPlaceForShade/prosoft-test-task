import {decrement, increment} from './counterSlice';
import styles from './Custom.module.css';
import {AppState} from 'app/store';
import cn from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'shared/hooks/useTheme';

export const Custom = () => {
	const {theme} = useTheme();

	const count = useSelector<AppState>(state => state.counter.value);
	const dispatch = useDispatch();

	const compStyles = cn({
		[styles.container]: true,
		[styles.dark]: theme === 'dark',
		[styles.light]: theme === 'light'
	});

	return (
		<div className={compStyles}>
			{count}
			<button
				onClick={() => dispatch(increment())}
				style={{height: '5rem', margin: '5rem', width: '5rem'}}
			>
				+
			</button>
			<button
				onClick={() => dispatch(decrement())}
				style={{height: '5rem', margin: '5rem', width: '5rem'}}
			>
				-
			</button>
		</div>
	);
};

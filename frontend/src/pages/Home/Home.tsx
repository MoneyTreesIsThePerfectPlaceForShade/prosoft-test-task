import { useAppSelector } from 'app/store';
import { AddBook } from 'components/AddBook/AddBook';
import {PageLayout} from 'components/PageLayout/PageLayout';
import { isAdmin } from 'shared/utils/check';
import styles from './Home.module.css';


export const Home = () => {
	const {user} = useAppSelector(state => state.auth);

	const renderAdminPanel = () => {
		if (user) {
			return isAdmin(user) ? (
				<div>
					<AddBook />
				</div>
			) : null;
		}

		return null;
	}

	return (
		<PageLayout>
			<div data-testid="app">
				<h1 className={styles.title}>Привет, <span>{user?.login ?? 'пользователь'}</span>!</h1>
				{renderAdminPanel()}
			</div >
		</PageLayout>
	);
};

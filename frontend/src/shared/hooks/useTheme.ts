import {ThemeContext} from 'providers/ThemeProvider';
import {useContext} from 'react';

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme нужно использовать с ThemeProvider');
	}

	return context;
};

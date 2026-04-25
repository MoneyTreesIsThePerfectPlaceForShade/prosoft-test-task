import {createContext, ReactNode, useState} from 'react';

export const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	const toggleTheme = () => {
		setTheme((prevTheme: string) => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';

			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};

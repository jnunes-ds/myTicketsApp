import React, { useContext, createContext, useState, ReactNode } from 'react';
import lightTheme from '~/global/themes/light';
import darkTheme from '~/global/themes/dark';

type ChosenThemeType = 'light' | 'dark';
type ThemeType = typeof lightTheme;

interface ThemeContextData {
	theme: ThemeType;
	setTheme(chosenTheme: ChosenThemeType): void;
}

interface Props {
	children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

function ThemeHookProvider({ children }: Props) {
	const [theme, _setTheme] = useState<ThemeType>(lightTheme);

	function setTheme(chosenTheme: ChosenThemeType) {
		let currentTheme: ThemeType = lightTheme;
		if (chosenTheme === 'light') currentTheme = lightTheme;
		if (chosenTheme === 'dark') currentTheme = darkTheme;
		_setTheme(currentTheme);
	}

	return (
		<ThemeContext.Provider
			value={{
				theme, 
				setTheme
			}}
		>
			{ children }
		</ThemeContext.Provider>
	);

};

function useThemeHook(): ThemeContextData {
	const context = useContext(ThemeContext);

	return context;
};

export { ThemeHookProvider, useThemeHook };

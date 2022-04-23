import React, { useContext, createContext, useState, ReactNode } from 'react';
import lightTheme from '~/global/themes/light';
import darkTheme from '~/global/themes/dark';

type ChosenThemeType = 'light' | 'dark';
type ThemeType = typeof lightTheme;
type BarThemeType = `${ChosenThemeType}-content`;

interface ThemeContextData {
	theme: ThemeType;
	setTheme(chosenTheme: ChosenThemeType): void;
	chosenTheme: BarThemeType;
}

interface Props {
	children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

function ThemeHookProvider({ children }: Props) {
	const [chosenTheme, _setChosenTheme] = useState<BarThemeType>('dark-content');
	const [theme, _setTheme] = useState<ThemeType>(lightTheme);

	function setTheme(chosenTheme: ChosenThemeType) {
		let currentTheme: ThemeType = lightTheme;
		let currentStatusBar:BarThemeType = 'dark-content'
		if (chosenTheme === 'light') {
			currentTheme = lightTheme;
			currentStatusBar = 'dark-content';
		};
		if (chosenTheme === 'dark') {
			currentTheme = darkTheme;
			currentStatusBar = 'light-content';
		};
		_setTheme(currentTheme);
		_setChosenTheme(currentStatusBar);
	}

	return (
		<ThemeContext.Provider
			value={{
				theme, 
				chosenTheme,
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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens/Home';
import { useThemeHook } from '~/hooks/Theme';
import { ThemeProvider } from 'styled-components';


export function Routes(){
	const { theme } = useThemeHook();
	return(
		<ThemeProvider theme={theme} >
			<NavigationContainer>
				<Home />
			</NavigationContainer>
		</ThemeProvider>
	)
}

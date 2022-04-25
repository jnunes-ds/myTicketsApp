import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens/private/Home';
import { useThemeHook } from '~/hooks/Theme';
import { ThemeProvider } from 'styled-components';
import { routes as PublicRoutes } from './Public.routes';


export function Routes(){
	const { theme, chosenTheme } = useThemeHook();
	return(
		<ThemeProvider theme={theme} >
			<NavigationContainer>
				<StatusBar
					translucent
					backgroundColor={'transparent'} 
					barStyle={chosenTheme}
				/>
				<PublicRoutes />
			</NavigationContainer>
		</ThemeProvider>
	)
}

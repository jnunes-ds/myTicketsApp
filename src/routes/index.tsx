import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens/private/Home';
import { useThemeHook } from '~/hooks/Theme';
import { ThemeProvider } from 'styled-components';
import {
	Event,
	Profile, 
	Search,
	Congratulations,
	Ticket,
	MyTickets
} from '~/screens/private';


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
				<MyTickets />
			</NavigationContainer>
		</ThemeProvider>
	)
}

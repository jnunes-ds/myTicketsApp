import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens/private/Home';
import { useThemeHook } from '~/hooks/Theme';
import { ThemeProvider } from 'styled-components';
import { Event, Profile, Search, Congratulations, Ticket } from '~/screens/private';
import { QRCode } from '../screens/private/QRCode/index';


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
				<QRCode />
			</NavigationContainer>
		</ThemeProvider>
	)
}

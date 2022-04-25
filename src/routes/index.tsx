import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens/private/Home';
import { useThemeHook } from '~/hooks/Theme';
import { ThemeProvider } from 'styled-components';
import { PublicRoutes } from './Public.routes';
import { PrivateRoutes } from './Private.routes';
import { useAuth } from '~/hooks/Auth';

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			LogIn: undefined;
			Register: undefined;
			Event: {
				id: string;
			};
			Congratulations: undefined;
			Ticket: {
				ticket_id: string;
			};
			Home: undefined;
			QRCode: {
				code: string
			}
		}
	}
}

export function Routes(){
	const { user } = useAuth();
	const { theme, chosenTheme } = useThemeHook();
	return(
		<ThemeProvider theme={theme} >
			<NavigationContainer>
				<StatusBar
					translucent
					backgroundColor={'transparent'} 
					barStyle={chosenTheme}
				/>
				{ user?.id ? <PrivateRoutes /> : <PublicRoutes /> }
			</NavigationContainer>
		</ThemeProvider>
	)
}

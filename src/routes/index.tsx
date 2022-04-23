import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens/Home';


export function Routes(){
	return(
		<NavigationContainer>
			<Home />
		</NavigationContainer>
	)
}

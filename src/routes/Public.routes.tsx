import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PublicEnum } from './public.routes.enum';
import { LogIn, Register } from '~/screens/public';

const Stack = createStackNavigator();

export function PublicRoutes(){

		return (
				<Stack.Navigator screenOptions={{ headerShown: false }} >
					<Stack.Screen name={PublicEnum.LOG_IN} component={LogIn} />
					<Stack.Screen name={PublicEnum.REGISTER} component={Register} />
				</Stack.Navigator>
		);
}

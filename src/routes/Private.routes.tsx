import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PrivateEnum } from './private.enum';
// @ts-ignore
import Feather from 'react-native-vector-icons/dist/Feather';
import React from 'react';
import { useTheme } from 'styled-components';
import { 
	Home,
	 Congratulations,
	 Event,
	 MyTickets,
	 Profile,
	 QRCode,
	 Search,
	 Ticket
} from '~/screens/private';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export function PrivateRoutes(){
	const theme = useTheme();

		return (
			<>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						unmountOnBlur: true,
						headerShown: false,
						tabBarLabelStyle: { fontFamily: theme.fonts.family.primaryBold },
						tabBarStyle: { height: 80, paddingBottom: 18, paddingTop: 18 },
						tabBarActiveTintColor: theme.colors.fontAndIcon.green,
						tabBarInactiveTintColor: theme.colors.fontAndIcon.secondary,
						tabBarIcon: ({ focused, color, size }) => {
							switch (route.name) {
								case PrivateEnum.HOME:
									return focused ? (
										<Feather 
											name="home"
											size={24}
											color={color}
										/>
									) : (
										<Feather 
											name="home"
											size={24}
											color={color}
										/>
									)
								case PrivateEnum.SEARCH:
									return focused ? (
										<Feather 
											name="search"
											size={24}
											color={color}
										/>
									) : (
										<Feather 
											name="search"
											size={24}
											color={color}
										/>
									)
								case PrivateEnum.MY_TICKETS:
									return focused ? (
										<Feather 
											name="credit-card"
											size={24}
											color={color}
										/>
									) : (
										<Feather 
											name="credit-card"
											size={24}
											color={color}
										/>
									)
								case PrivateEnum.PROFILE:
									return focused ? (
										<Feather 
											name="user"
											size={24}
											color={color}
										/>
									) : (
										<Feather 
											name="user"
											size={24}
											color={color}
										/>
									)
							}
						}
					})}
				>
					<Tab.Screen
						name={PrivateEnum.HOME}
						options={{ tabBarLabel: 'Home' }}
						component={Home}
					/>
					<Tab.Screen 
						name={PrivateEnum.SEARCH}
						options={{ tabBarLabel: 'Search' }}
						component={Search}
					/>
					<Tab.Screen 
						name={PrivateEnum.MY_TICKETS}
						options={{ tabBarLabel: 'My Tickets' }}
						component={MyTickets}
					/>
					<Tab.Screen 
						name={PrivateEnum.PROFILE}
						options={{ tabBarLabel: 'Profile' }}
						component={Profile}
					/>
				</Tab.Navigator>
			</>
		);
}

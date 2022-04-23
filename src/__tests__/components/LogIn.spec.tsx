import React from 'react'
import { BackButton } from '~/components';
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import lightTheme from '~/global/themes/light';

const Providers: React.FC = ({ children }) => {
	return (
	<NavigationContainer >
		<ThemeProvider theme={lightTheme} >
			{ children }
		</ThemeProvider>
	"</NavigationContainer>
	);
}

describe('LogIn screen', () => {
	it('Sould be rendered on screen', () => {
		const { getByTestId, debug } = render(
			<BackButton />,{
				wrapper: Providers
			}
		);

		
	});
});

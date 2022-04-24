import React from 'react'
import { LogIn } from '~/screens/public/LogIn';
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import lightTheme from '~/global/themes/light';

const Providers: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={lightTheme}>
			<NavigationContainer>
					{ children }
			</NavigationContainer>
		</ThemeProvider>
	);
}

describe('LogIn screen', () => {
	it('Sould be rendered on screen', () => {
		const { getByTestId, debug } = render(
			<LogIn />,{
				wrapper: Providers
			}
		);

		const title = getByTestId('title');
		expect(title.props.children).toEqual('Hello World');
	});
});

import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import lightTheme from '~/global/themes/light';
import { BackButton } from '~/components';

const Providers: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={lightTheme} >
			{ children }
		</ThemeProvider>
	);
}

describe('BackButton compoent', () => {
	it('Sould be rendered on screen', () => {
		const { getByTestId, debug } = render(
			<BackButton onPress={() => {}} />,{
				wrapper: Providers
			}
		);
		debug();

		const button = getByTestId('button');
		expect(button).toEqual('Hello World');
	});
});

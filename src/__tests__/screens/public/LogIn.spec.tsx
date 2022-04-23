import { LogIn } from '~/screens/public/LogIn';
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
		const { getByTestId } = render(
			<LogIn />,
			{
				wrapper: Providers
			}
		);

		const title = getByTestId('title');
		expect(title.props.value).toEqual('Hello World');
	});
});

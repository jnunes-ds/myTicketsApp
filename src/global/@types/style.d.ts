import 'styled-components';
import lightTheme from '~/global/themes/light';

declare module 'styled-components' {
	type ThemeType = typeof lightTheme;

	export interface DefaultTheme extends ThemeType {};
}

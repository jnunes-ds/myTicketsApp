import React from 'react';
import { Svg, Path } from 'react-native-svg';

import {
		Container,
} from './styles'

interface Props{
	onPress(): void;
}

export function MenuButton({ onPress } : Props){

		return (
				<Container>
					<Svg width="30" height="30" viewBox="0 0 30 30" fill="none" >
						<Path fill-rule="evenodd" clip-rule="evenodd" d="M24.625 17.375C25.6605 17.375 26.5 18.2145 26.5 19.25C26.5 20.2855 25.6605 21.125 24.625 21.125H5.875C4.83947 21.125 4 20.2855 4 19.25C4 18.2145 4.83947 17.375 5.875 17.375H24.625ZM24.625 8C25.6605 8 26.5 8.83947 26.5 9.875C26.5 10.9105 25.6605 11.75 24.625 11.75H5.875C4.83947 11.75 4 10.9105 4 9.875C4 8.83947 4.83947 8 5.875 8H24.625Z" fill="#7F7F7F"/>
					</Svg>
				</Container>
		);
}

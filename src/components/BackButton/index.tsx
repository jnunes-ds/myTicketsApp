import React from 'react';
import { ImageBackground } from 'react-native';
import { SvgCssUri } from 'react-native-svg';

import {
	Container,
	Title
} from './styles';

export function BackButton(){

	return (
		<Container>
			<SvgCssUri 
				width={40}
				height={20}
				uri="../../assets/chevron-left.svg"
			/>
		</Container>
	);
}

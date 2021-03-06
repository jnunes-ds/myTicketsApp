import React from 'react';
import { Svg, Path } from 'react-native-svg';

import {
	Container,
} from './styles';

interface Props {
	onPress(): void;
}

export function BackButton({ onPress }: Props){

	return (
		<Container testID='button' onPress={onPress} >
			<Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
				<Path d="M17.9736 23.9248L10.1089 16.2446C9.75 15.896 9.58594 15.5269 9.58594 15.0962C9.58594 14.6553 9.76025 14.2861 10.1089 13.9478L17.9736 6.25732C18.2402 5.99072 18.5684 5.85742 18.9683 5.85742C19.7578 5.85742 20.4038 6.49316 20.4038 7.28271C20.4038 7.66211 20.2397 8.03125 19.9526 8.31836L12.98 15.0859L19.9526 21.874C20.2397 22.1509 20.4038 22.52 20.4038 22.9097C20.4038 23.6992 19.7578 24.335 18.9683 24.335C18.5786 24.335 18.2505 24.1914 17.9736 23.9248Z" fill="#7F7F7F"/>
			</Svg>
		</Container>
	);
}

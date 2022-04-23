import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
		Container,
		Title
} from './styles';

type ButtonType = 'success' | 'default' | 'blue';

interface Props extends TouchableOpacityProps {
		title: string;
		type: ButtonType;
		onPress(arg: any | void): void
}

export function Button({ title, type, onPress } : Props){
	const { colors } = useTheme();

		return (
				<Container
					color={
						type === 'default' 
							? colors.fill.primary
							: type === 'blue'
								? colors.brand.primary
								: type === 'success'
									? colors.fontAndIcon.green
									: colors.fill.primary
					}
					onPress={onPress}
				>
						<Title
							color={
								type === 'default'
									? colors.fontAndIcon.secondary
									: colors.fontAndIcon.white
							}
						> {title} </Title>
				</Container>
		);
}

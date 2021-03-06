import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
	width: 75px;
	height: 98px;
	margin-left: 12px;
`;

export const ImageContent = styled.View`
	width: 75px;
	height: 75px;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.Image`
	width: 100%;
	height: 100%;
	border-radius: 50px;
`;

export const Title = styled.Text`
	text-align: center;
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.small1)}px;
		color: ${theme.colors.fill.secondary};
	`};
`;

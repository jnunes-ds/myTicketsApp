import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
	border-radius: 10px;
	overflow: hidden;
`;


export const Image = styled.ImageBackground`
	width: 150px;
	height: 225px;
	border-radius: 10px;
`;

export const Title = styled.Text`
	text-align: center;
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.medium)}px;
		color: ${theme.colors.fill.secondary};
	`};
`;

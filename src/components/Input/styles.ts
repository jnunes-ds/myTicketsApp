import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	margin-top: 20px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.small1)}px;
		color: ${theme.colors.fontAndIcon.secondary};
		text-transform: uppercase;
	`};
`;

export const ContentInput = styled.TextInput`
	background-color: ${({ theme }) => theme.colors.background.primary};
	width: 100%;
	height: 44px;
	border-radius: 10px;
	padding-left: 10px;
	margin-top: 10px;
`;

export const TextError = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondary};
		font-size: ${RFValue(theme.fonts.sizes.small1)}px;
		color: ${theme.colors.fontAndIcon.red};
	`};
`;

import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	width: 100%;
	height: 44px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.background.primary};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	overflow: hidden;
`;

export const Input = styled.TextInput`
	width: 92.5%;
	height: 44px;
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondary};
		font-size: ${RFValue(theme.fonts.sizes.small2)}px;
		color: ${theme.colors.fontAndIcon.tertiary};
	`};
`;


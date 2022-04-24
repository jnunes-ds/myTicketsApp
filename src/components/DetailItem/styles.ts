import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	min-height: 60px;
	${({ theme }) => css`
			background-color: ${theme.colors.background.primary};
			`};
			padding-vertical: 11px;
			padding-left: 20px;
			
`;

export const Content = styled.View`
	width: 100%;
	margin-right: 0;
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.colors.fontAndIcon.secondary};
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${RFValue(theme.fonts.sizes.small2)}px;
		font-family: ${theme.fonts.family.secondaryBold};
		color: ${theme.colors.fill.secondary};
	`};
	text-transform: uppercase;
`;

export const InfoContainer = styled.View`
	flex-direction: row;
`;

export const Info = styled.Text`
	${({ theme }) => css`
		font-size: ${RFValue(theme.fonts.sizes.small1)}px;
		font-family: ${theme.fonts.family.secondary};
		color: ${theme.colors.fill.secondary};
	`};
`;

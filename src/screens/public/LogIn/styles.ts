import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

interface TextProps {
	havUnderlinde?: boolean;
}

export const Container = styled.View`
	flex: 1;
	padding-horizontal: 24px;
	${() => Platform.OS === 'ios' ? css`
	padding-top: 70px;
	` : css`
		padding-top: 50px;
	`};
	background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.huge)}px;
		color: ${theme.colors.fontAndIcon.primary};
	`};
`;

export const Content = styled.View`
	flex: 1;
`;

export const SmallTexts = styled.Text<TextProps>`
	margin-top: 10px;
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.tinny)}px;
		color: ${theme.colors.fill.secondary};
	`};
	${({ havUnderlinde }) => havUnderlinde && css`
		text-decoration: underline;
	`};
`;

export const Footer = styled.View`
  flex-direction: row;
`;

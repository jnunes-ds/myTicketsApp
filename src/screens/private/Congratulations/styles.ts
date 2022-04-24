import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.View`
	padding-horizontal: 24px;
	flex: 1;
	${() => Platform.OS === 'ios' ? css`
	padding-top: 70px;
	` : css`
		padding-top: 50px;
	`};
	background-color: ${({ theme }) => theme.colors.background.default};
	padding-bottom: 50px;
`;

export const SvgContainer = styled.View`
	margin-top: 100px;
`;

export const TextContainer = styled.View`
	justify-content: center;
	align-items: center;
	padding-horizontal: 20px;
	margin-top: 40px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.big)}px;
		color: ${theme.colors.fontAndIcon.green};
	`};
`;

export const Message = styled.Text`
	margin-top: 20px;
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondary};
		font-size: ${RFValue(theme.fonts.sizes.small1)}px;
		color: ${theme.colors.fontAndIcon.primary};
		text-align: center;
	`};
`;

export const ButtonsContainer = styled.View``;

import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

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
export const Content = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Message = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.big)}px;
		color: ${theme.colors.fontAndIcon.secondary};
	`};
`;

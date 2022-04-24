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
	padding-bottom: 50px;
`;

export const Title = styled.Text``;

export const CodeContainer = styled.TouchableOpacity`
	margin-top: 20px;
`;

export const CodeTitle = styled.Text`
	${ ({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.small1)}px;
		color: ${theme.colors.fill.secondary};
	`};
	text-transform: uppercase;
`;

export const Code = styled.Text`
	${ ({ theme }) => css`
		font-family: ${theme.fonts.family.secondary};
		font-size: ${RFValue(theme.fonts.sizes.small2)}px;
		color: ${theme.colors.fontAndIcon.secondary};
	`};
`;

export const QRCodeContainer = styled.View`
	width: 100%;
	height: 338px;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	margin-bottom: 50px;
`;

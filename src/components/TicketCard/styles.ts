import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.fill.primary};
	width: 100%;
	height: 87px;
	border-radius: 20px;
	overflow: hidden;
`;

export const Title = styled.Text``;

export const EventImage = styled.ImageBackground`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
`;

export const EventName = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.medium)}px;
		color: ${theme.colors.fill.secondary};
	`};
`;


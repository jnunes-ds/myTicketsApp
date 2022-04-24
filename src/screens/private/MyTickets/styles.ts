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
	overflow: hidden;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.huge)}px;
		color: ${theme.colors.fontAndIcon.primary};
	`};
`;

export const TicketCardListContainer = styled.View`
	margin-top: 50px;
`;

export const TicketCardLit = styled.FlatList``;

export const TicketCardSeparator = styled.View`
	width: 100%;
	margin-bottom: 20px;
`;

import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.Modal``;

export const Content = styled.ScrollView`
	${({ theme }) => css`
		background-color: ${theme.colors.background.primary};
	`};
	${() => Platform.OS === 'ios' ? css`
		margin-top: 55%;
	` : css`
		margin-top: 50%;
	`}
	height: 634px;
	padding-top: 58px;
	padding-horizontal: 22px;
	padding-bottom: 100px;
	margin-left: 20px;
	margin-right: 20px;
	border-radius: 10px;
`;

export const Scroll = styled.ScrollView`
	width: 100%;
	height: 100%;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.medium)}px;
		color: ${theme.colors.fontAndIcon.secondary};
	`};
	text-align: left;
`;

export const PickDaysSelectorContainer = styled.View`
	margin-top: 50px;
`;

export const PickDaySelectorList = styled.FlatList``;

export const TypeOfTicketContainer = styled.View`
	margin-top: 50px;
`;

export const TypeOfTicketList = styled.FlatList``;

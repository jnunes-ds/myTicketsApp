import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.Modal`
	justify-content: center;
	align-items: center;
`;

export const Content = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.background.primary};
	`};
	margin-top: 20px;
	height: 90%;
	padding-top: 58px;
	padding-horizontal: 22px;
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

export const TotalContainer = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: flex-end;
`;

export const TotalContent = styled.View``;

export const TotalTitle = styled.Text`
	${({ theme }) => css`
		font-size: ${RFValue(theme.fonts.sizes.medium)}px;
	`};
`;

export const TotalValue = styled.Text``;


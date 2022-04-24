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

export const Content = styled.ScrollView``;

export const EventImageContainer = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const EventImage = styled.Image`
	width: 224px;
	height: 366px;
	border-radius: 10px;
	margin-bottom: 20px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.big)}px;
		color: ${theme.colors.fontAndIcon.primary};
	`};
	text-align: left;
`;

export const SubTitle = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.big)}px;
		color: ${theme.colors.fontAndIcon.secondary};
	`};
	text-align: left;
`;

export const DetailsContainer = styled.View`
	width: 100%;
	margin-top: 50px;
`;

export const DetailsTitle = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.medium)}px;
		color: ${theme.colors.fontAndIcon.secondary};
	`};
`;

export const DetailsContent = styled.View`
	margin-top: 20px;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
`;



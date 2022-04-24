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

export const ProfilePhotoContianer = styled.View`
margin-top: 20px;
	width: 100%;
	height: 152px;
`;

export const ProfilePhotoTitle = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${theme.fonts.sizes.small1};
		color: ${theme.colors.fontAndIcon.secondary};
		text-transform: uppercase;
	`};
	margin-bottom: 10px;
`;

export const ProfilePhotoSubContainer = styled.TouchableOpacity`
	width: 100%;
	height: 124px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.background.primary};
	justify-content: center;
	align-items: center;
`;

export const ProfilePhotoContent = styled.View`
	width: 102px;
	height: 102px;
	border-radius: 55px;
	overflow: hidden;
`;

export const ProfilePhoto = styled.ImageBackground`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const ProfilePhotoIconContainer = styled.View`
	width: 48px;
	height: 48px;
	border-radius: 24px;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.25);
`;


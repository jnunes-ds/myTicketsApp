import styled, { css } from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
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

export const CategoriesListContainer = styled.View`
	margin-top: 50px;
`;

export const CategoriesListTitle = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.big)}px;
		color: ${theme.colors.fontAndIcon.secondary};
	`};
`;

export const CategoriesList = styled.FlatList``;


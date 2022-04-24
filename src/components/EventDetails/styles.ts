import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Title = styled.Text``;

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

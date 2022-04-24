import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
	selected: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	width: 100%;
	height: 76px;
	border-radius: 20px;
	margin-top: 20px;
	background-color: ${({ theme }) => theme.colors.fill.primary};
	overflow: hidden;
	justify-content: center;
	align-items: center;
	${({ selected, theme }) => selected && css`
		border-width: 2px;
		border-color: ${theme.colors.fontAndIcon.green};
	`};
`;

export const Image = styled.ImageBackground`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.fonts.family.primaryBold};
		font-size: ${RFValue(theme.fonts.sizes.medium)};
		color: ${theme.colors.fontAndIcon.white}
	`};
`;

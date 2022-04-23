import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
	color: string;
}

export const Container = styled.TouchableOpacity<Props>`
	width: 100%;
	height: 50px;
	margin-top: 20px;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
	background-color: ${({ color }) => color};
`;

export const Title = styled.Text<Props>`
	${({ theme, color }) => css`
		font-family: ${theme.fonts.family.secondaryBold};
		font-size: ${RFValue(theme.fonts.sizes.small2)}px;
		color: ${color};
	`};
`;

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';

export const Container = styled.View`
	margin-top: 13px;
`;

export const Title = styled.Text``;

export const ContentInput = styled.TextInput<TextInputProps>`
	margin-top: 10px;
	background-color: ${({ theme }) => theme.colors.background.primary};
	width: 100%;
	height: 44px;
	border-radius: 10px;
`;

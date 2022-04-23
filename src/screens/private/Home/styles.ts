import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(50)}px;
	color: ${({ theme }) => theme.colors.fontAndIcon.primary};
`;

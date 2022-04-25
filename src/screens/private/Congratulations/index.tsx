import React, { useCallback, useState } from 'react';
import { getDayName } from '~/utils/getDayName';
import { Svg, Path, G } from 'react-native-svg';

import {
		Container,
		SvgContainer,
		TextContainer,
		Title,
		Message,
		ButtonsContainer
} from './styles';
import { SvgSuccess } from './components/SvgSuccess';
import { BackButton, Button } from '~/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';

interface Params {
	code: string;
}

export function Congratulations(){
	const { navigate } = useNavigation();
	const route = useRoute();
	const { code } = route.params as Params;
	const eventName = 'Show contra a intolerância religiosa';
	const dayName = 'Sat';
	const startsAt = '15:00';
	const endsAt = '23:00';

	const handleOpenTicket = useCallback(() => {
		navigate(PrivateEnum.TICKET, { code });
	}, [navigate]);

	const handleBackToHome = useCallback(() => {
		navigate(PrivateEnum.HOME);
	}, [navigate]);

		return (
				<Container>
					<SvgContainer>
						<SvgSuccess />
					</SvgContainer>
					<TextContainer>
						<Title> Congratulations </Title>
						<Message>
							You have just purchased a ticket to the
							{eventName},
							on {getDayName(dayName)} from {startsAt} to {endsAt}
						</Message>
					</TextContainer>
					<ButtonsContainer>
						<Button 
							title='Access Ticket'
							onPress={handleOpenTicket}
							type="success"
						/>
						<Button 
							title='Go Back to Feed'
							onPress={handleBackToHome}
							type="blue"
						/>
					</ButtonsContainer>
				</Container>
		);
}

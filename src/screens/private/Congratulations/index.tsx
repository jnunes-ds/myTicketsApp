import React, { useState } from 'react';
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

export function Congratulations(){
	const eventName = 'Show contra a intolerância religiosa';
	const dayName = 'Sat';
	const startsAt = '15:00';
	const endsAt = '23:00'

		return (
				<Container>
					<BackButton onPress={() => {}} />
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
							onPress={() => {}}
							type="success"
						/>
						<Button 
							title='Go Back to Feed'
							onPress={() => {}}
							type="blue"
						/>
					</ButtonsContainer>
				</Container>
		);
}
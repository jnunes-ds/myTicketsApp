import React, { useCallback } from 'react';
import { ITicket } from '~/models/ticket';
import { useNavigation } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';

import {
	Container,
	Title,
	EventImage,
	EventName
} from './styles'

interface Props {
	data: ITicket;
}

export function TicketCard({ data } : Props){
	const { navigate } = useNavigation();

	const handleOpenTicket = useCallback(() => {
		navigate(PrivateEnum.TICKET, { ticket_id: 'ndfvsonfds' });
	}, [navigate]);

		return (
				<Container
					onPress={handleOpenTicket}
				>
					{/* @ts-ignore */}
					<EventImage
						source={{
							uri: data.event_url
						}}
					>
						<EventName>
							{data.event_name}
						</EventName>
					</EventImage>
				</Container>
		);
}

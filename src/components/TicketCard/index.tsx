import React from 'react';
import { ITicket } from '~/models/ticket';

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

		return (
				<Container>
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

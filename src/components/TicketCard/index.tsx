import React, { useCallback, useEffect, useState } from 'react';
import { ITicket } from '~/models/ticket';
import { useNavigation } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';

import {
	Container,
	Title,
	EventImage,
	Content,
	EventName
} from './styles'
import { View } from 'react-native';

interface Props {
	data: {
		ticket: ITicket;
	};
}

export function TicketCard({ data } : Props){
	const [loading, setLoading] = useState<boolean>(true);
	const { navigate } = useNavigation();

	useEffect(() => {
		if (
			data &&
			data.ticket &&
			data.ticket.id
		) setLoading(false);
	}, [data]);

	const handleOpenTicket = useCallback(() => {
		navigate(PrivateEnum.TICKET, { code: data.ticket.code });
	}, [navigate]);

	if (loading) {
		return <View />
	}

		return (
				<Container
					onPress={handleOpenTicket}
				>
					{/* @ts-ignore */}
					<EventImage
						source={{
							uri: data?.ticket?.event_url
						}}
					>
						<Content>
							<EventName>
								{data?.ticket?.event_name}
							</EventName>
						</Content>
					</EventImage>
				</Container>
		);
}

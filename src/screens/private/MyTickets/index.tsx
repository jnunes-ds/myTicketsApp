import React, { useEffect, useState } from 'react';
import { BackButton, TicketCard } from '~/components';
import { ITicket } from '~/models/ticket';
import { useAuth } from '~/hooks/Auth';

import {
		Container,
		Title,
		TicketCardListContainer,
		TicketCardLit,
		TicketCardSeparator
} from './styles';
import { Alert } from 'react-native';
import EventsService from '~/services/Events';

export function MyTickets(){
	const [loading, setLoading] = useState<boolean>(true);
	const [myTickets, setMyTickets] = useState<ITicket[]>([]);
	const { user } = useAuth();

	useEffect(() => {
		getMyTickets();
	}, []);

	useEffect(() => {
		if (myTickets.length) setLoading(false);
	}, [myTickets]);

	const getMyTickets = async () => {
		try {
			const response = await EventsService.getTicketsByUserId(user.id);

			if (response) {
				setMyTickets(response.data);
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível encontrar os seus tickets');
		}
	}

		return (
				<Container>
					<BackButton onPress={() => {}} />
						<Title> My Tickets</Title>
						{
							!loading &&
							<TicketCardListContainer>
								<TicketCardLit
									data={myTickets}
									renderItem={({item}) => (
										<>
											<TicketCard data={item as ITicket}  />
											<TicketCardSeparator/>
										</>
									)}
								/>
							</TicketCardListContainer>
						}
				</Container>
		);
}

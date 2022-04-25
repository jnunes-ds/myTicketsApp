import React, { useCallback, useEffect, useState } from 'react';
import { BackButton, Button, EventDetails, EventDetailsProps } from '~/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';

import {
	Container,
	Title,
	DetailsContainer,
	DetailsContent,
	DetailsTitle,
	CodeContainer,
	CodeTitle,
	Code,
	ButtonsContainer,
	Content
} from './styles';
import { ITicket } from '~/models/ticket';
import { Alert } from 'react-native';
import EventsService from '~/services/Events';
import { IEvent } from '~/models/event';

interface Params {
	code: string;
	ticket: ITicket;
}

export function Ticket(){
	const { navigate, goBack } = useNavigation();
	const route = useRoute();
	const { code, ticket } = route.params as Params;
	const [loading, setLoading] = useState<boolean>(false);
	const [event, setEvent] = useState<IEvent>({} as IEvent);
	const eventDetails: EventDetailsProps = {
		data: {
			showTime: '14:30',
			Address: 'Rua Alcobaça, 139, Resgate, Salvador, Bahia, Brasil, CEP: 41152-115.',
			genres: ['Show', 'Religious'],
			value: 150,
			description: 'Show do povo de santo contra intolerância religiosa.'
		}
	};

	useEffect(() => {
		if (code) {
			console.log(ticket && ticket?.event_id)
			// getTicket()
		}
	}, [code]);

	useEffect(() => {
		if (ticket && ticket.id) {
			getEvent()
		}
	}, [ticket]);

	useEffect(() => {
		if (event && event.id) {
			setLoading(false);
		}
	}, [event]);

	const getTicket = async () => {
		try {
			if (code) {
				const response = await EventsService.getTicketById(ticket.id);
	
				if (response) {
					setTicket(response.data);
				}
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível encontrar o ticket');
		}
	}

	const getEvent = async () => {
		try {
			const response = await EventsService.getEventById(ticket.event_id);

			if (response) {
				setEvent(response.data);
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível encontrar o evento em questão');
		}
	}

	const handleOpenQRCode = useCallback(() => {
		navigate(PrivateEnum.QR_CODE, { code: 'iFNeD8b' });
	}, [navigate]);

	return (
			<Container>
				<BackButton onPress={goBack} />
				{
					!loading &&
					<Content showsVerticalScrollIndicator={false} >
						<DetailsContainer>
							<DetailsContent>
								<EventDetails
									data={ticket}
								/>
								</DetailsContent>
						</DetailsContainer>
						<CodeContainer onPress={() => {}} >
							<CodeTitle>Ticket Code</CodeTitle>
							<Code>{ticket.code}</Code>
						</CodeContainer>
						<ButtonsContainer>
							<Button 
								title='Copy code'
								onPress={() => {}}
								type="blue"
							/>
							<Button 
								title='Access QR Code'
								onPress={handleOpenQRCode}
								type="success"
							/>
							<Button 
								title='Sharecode'
								onPress={() => {}}
								type="default"
							/>
						</ButtonsContainer>
					</Content>
				}
			</Container>
	);
}

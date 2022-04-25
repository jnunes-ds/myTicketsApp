import React, { useEffect, useState } from 'react';
import { 
	BackButton,
	Button,
	BuyTicketModal,
	EventDetails,
	EventDetailsProps 
} from '~/components';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
		Container,
		Content,
		Title,
		EventImage,
		EventImageContainer,
		SubTitle,
		DetailsContainer,
		DetailsTitle,
		DetailsContent,
} from './styles'
import { DaysListProps } from '~/components/BuyTicketModal';
import { IEvent } from '~/models/event';
import { Alert, View } from 'react-native';
import EventsService from '~/services/Events';
import { getMonthByNumber } from '../../../utils/getMonthByNumber';

interface Params {
	id: string;
}


export function Event(){
	const [isBuyTicketModalVisible, setIsBuyTicketModalVisible] = useState<boolean>(false);
	const [event, setEvent] = useState<IEvent>({} as IEvent);
	const [loading, setLoading] = useState<boolean>(true);
	const { goBack } = useNavigation();
	const route = useRoute();
	const { id } = route.params as Params;
	const daysList = [
		{
			weekDay: 'Thu',
			dayName: 'Thusday',
			startsAt: '19:00',
			endsAt: '22:00'
		},
		{
			weekDay: 'Fri',
			dayName: 'Friday',
			startsAt: '19:00',
			endsAt: '22:00'
		},
		{
			weekDay: 'Sat',
			dayName: 'Saturday',
			startsAt: '15:00',
			endsAt: '23:00'
		},
	]
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
		getEvent();
	}, [id]);

	const getEvent = async () => {
		try {
			const response = await EventsService.getEventById(id);

			if (response) {
				setEvent(response.data);
			}
		} catch (error) {
			Alert.alert('Atenção', 'Não foi possível localizar o evento em questão, verifique sua conexão');
			console.error(error);
		}
	}

		return (
				<Container>
					<BackButton onPress={goBack} />
					{
						event &&
						event.id
							?	(
									<Content
										showsVerticalScrollIndicator={false}
									>
										<EventImageContainer>
											<EventImage 
												source={{
													uri: event.event_photo_url ?? 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
												}}
											/>
										</EventImageContainer>
											<Title> {event.name} </Title>
											<SubTitle>
												{
													getMonthByNumber(
														new Date(event.days_long[0].date).getMonth()
													)
												} {`${new Date(event.days_long[0].date).getDate()}`}, 
												{
													` ${new Date(event.days_long[0].date).getFullYear()}`
												}
											</SubTitle>
											<Button 
												onPress={() => setIsBuyTicketModalVisible(true)}
												title="Buy Ticket"
												type='blue'
											/>
											<DetailsContainer>
												<DetailsContent>
													<EventDetails
														data={event}
													/>
													</DetailsContent>
											</DetailsContainer>
											<BuyTicketModal 
												event={event}
												isVisible={isBuyTicketModalVisible}
												setIsVisible={setIsBuyTicketModalVisible}
											/>
									</Content>
							) : (
								<View />
							)
					}
				</Container>
		);
}

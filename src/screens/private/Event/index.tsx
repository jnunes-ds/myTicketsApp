import React, { useState } from 'react';
import { 
	BackButton,
	Button,
	BuyTicketModal,
	EventDetails,
	EventDetailsProps 
} from '~/components';
import { useNavigation } from '@react-navigation/native';

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


export function Event(){
	const { goBack } = useNavigation();
	const [isBuyTicketModalVisible, setIsBuyTicketModalVisible] = useState<boolean>(false);
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

		return (
				<Container>
					<BackButton onPress={goBack} />
					<Content
						showsVerticalScrollIndicator={false}
					>
						<EventImageContainer>
							<EventImage 
								source={{
									uri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
								}}
							/>
						</EventImageContainer>
							<Title> Show contra a intolerância religiosa </Title>
							<SubTitle>Sep 3, 2022</SubTitle>
							<Button 
								onPress={() => setIsBuyTicketModalVisible(true)}
								title="Buy Ticket"
								type='blue'
							/>
							<DetailsContainer>
								<DetailsTitle>Details</DetailsTitle>
								<DetailsContent>
									<EventDetails
										data={eventDetails.data}
									/>
									</DetailsContent>
							</DetailsContainer>
							<BuyTicketModal 
								daysList={daysList as  DaysListProps[]}
								isVisible={isBuyTicketModalVisible}
								setIsVisible={setIsBuyTicketModalVisible}
							/>
					</Content>
				</Container>
		);
}

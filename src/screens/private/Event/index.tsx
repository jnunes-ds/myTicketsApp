import React, { useState } from 'react';
import { BackButton, Button, BuyTicketModal } from '~/components';
import { DetailItem } from './components/DetailItem';

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


export function Event(){
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

		return (
				<Container>
					<BackButton onPress={() => {}} />
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
								onPress={() => {}}
								title="Buy Ticket"
								type='blue'
							/>
							<DetailsContainer>
								<DetailsTitle>Details</DetailsTitle>
								<DetailsContent>
									<DetailItem 
										title='ShowTime'
										info='14:30'
									/>
									<DetailItem 
										title='Address'
										info='Salvador, Bahia, Brasil, .'
									/>
									<DetailItem 
										title='genres'
										info='Show, Religious'
									/>
									<DetailItem 
										title='Value'
										info='143,00'
									/>
									<DetailItem 
										title='description'
										info='Show do povo de santo contra intolerância religiosa.'
									/>
								</DetailsContent>
							</DetailsContainer>
							<BuyTicketModal daysList={daysList} />
					</Content>
				</Container>
		);
}

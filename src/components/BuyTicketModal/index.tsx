import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { weekDayType } from '~/models/components/weekDays';
import { Button } from '../Button';
import { PickDaySelector } from './components/PickDaySelector';
import { TypeOfTicketCard } from './components/TypeOfTicketCard';

import {
	Container,
	Content,
	Title,
	PickDaysSelectorContainer,
	PickDaySelectorList,
	TypeOfTicketContainer,
	TypeOfTicketList,
	Scroll,
	TotalContainer,
	TotalContent,
	TotalTitle,
	TotalValue,
} from './styles';

interface DaysListProps {
	dayName: string;
	weekDay: weekDayType;
	startsAt: string;
	endsAt: string;
}

interface ITicketType {
	title: string;
	image_url: string;
}

interface Props {
	daysList: DaysListProps[];
}

export function BuyTicketModal({ daysList }: Props){
	const [selectedDay,setSelectedDay] = useState('');
	const [selectedType, setSelectedType] = useState('');
	const ticketsTypeList = [
		{
			title: 'Área Vip',
			image_url: ''
		},
		{
			title: 'Camarote',
			image_url: ''
		},
		{
			title: 'Pista',
			image_url: ''
		},
	];

	const handlePickDay = useCallback((weekDay: weekDayType) => {
		setSelectedDay(weekDay);
	}, [setSelectedDay]);

	const handlePickTicketType = useCallback((ticketType: string) => {
		setSelectedType(ticketType);
	}, [setSelectedType]);

		return (
				<Container transparent >
					<Content>
						<Scroll showsVerticalScrollIndicator={false} >
							<Title> Choose an available day</Title>
							<PickDaysSelectorContainer>
								{
									daysList.map(item => (
										<PickDaySelector
											key={item.weekDay} 
											isSelected={item.weekDay === selectedDay}
											title={item}
											onPress={() => handlePickDay(item.weekDay)} 
										/>
									))
								}
							</PickDaysSelectorContainer>
							<TypeOfTicketContainer>
								{
									ticketsTypeList.map(item => (
										<TypeOfTicketCard
											key={item.title} 
											title={item.title}
											image_url={item.image_url}
											onPress={() => handlePickTicketType(item.title)} 
											selected={selectedType === item.title}
										/>
									))
								}
							</TypeOfTicketContainer>
							<TotalContainer>
								<TotalContent>
									<TotalTitle>Total</TotalTitle>
									<TotalValue>RS 150,00</TotalValue>
								</TotalContent>
							</TotalContainer>
							<Button title='Buy Ticket' onPress={() => {}} type='success' />
						</Scroll>
					</Content>
				</Container>
		);
}

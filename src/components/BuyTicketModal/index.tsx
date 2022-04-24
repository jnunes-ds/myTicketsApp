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
	Scroll
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
								<PickDaySelectorList 
									data={daysList}
									// @ts-ignore
									renderItem={({item}: {item: DaysListProps}) => (
										<PickDaySelector 
											isSelected={item.weekDay === selectedDay}
											title={item}
											onPress={() => handlePickDay(item.weekDay)} 
										/>
									)}
								/>
							</PickDaysSelectorContainer>
							<TypeOfTicketContainer>
								<TypeOfTicketList
									data={ticketsTypeList}
									// @ts-ignore
									renderItem={({item}:{item:ITicketType}) => (
										<TypeOfTicketCard 
											title={item.title}
											image_url={item.image_url}
											onPress={() => handlePickTicketType(item.title)} 
											selected={selectedType === item.title}
										/>
									)}
								/>
							</TypeOfTicketContainer>
							<Button title='Buy Ticket' onPress={() => {}} type='success' />
						</Scroll>
					</Content>
				</Container>
		);
}

import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { weekDayType } from '~/models/components/weekDays';
import { BackButton } from '../BackButton';
import { Button } from '../Button';
import { PickDaySelector } from './components/PickDaySelector';
import { TypeOfTicketCard } from './components/TypeOfTicketCard';
import { useNavigation } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';

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

export interface DaysListProps {
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
	isVisible: boolean;
	setIsVisible(isVisible: boolean): void;
}

export function BuyTicketModal({ daysList, isVisible, setIsVisible }: Props){
	const { navigate } = useNavigation();
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

	const handleBuyTicket = useCallback(() => {
		navigate(PrivateEnum.CONGRATULATIONS);
	}, [navigate]);

		return (
			
			<Container visible={isVisible} transparent >
					<Content>
						<BackButton onPress={() => setIsVisible(false)} />
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
							<Button title='Buy Ticket' onPress={handleBuyTicket} type='success' />
						</Scroll>
					</Content>
			</Container>
		);
}

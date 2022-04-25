import React, { useCallback, useState } from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import { weekDayType } from '~/models/components/weekDays';
import { BackButton } from '../BackButton';
import { Button } from '../Button';
import { PickDaySelector } from './components/PickDaySelector';
import { TypeOfTicketCard } from './components/TypeOfTicketCard';
import { useNavigation } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';
import { v4 as uuidv4 } from 'uuid';

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
import { IEvent, IValues } from '~/models/event';
import EventsService from '~/services/Events';
import { ITicket } from '~/models/ticket';
import { useAuth } from '~/hooks/Auth';

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
	event: IEvent;
	isVisible: boolean;
	setIsVisible(isVisible: boolean): void;
}

export function BuyTicketModal({ event, isVisible, setIsVisible }: Props){
	const { navigate } = useNavigation();
	const [selectedDay,setSelectedDay] = useState<weekDayType>('' as weekDayType);
	const [selectedType, setSelectedType] = useState('');
	const [value, setValue] = useState<number>(0);
	const { user } = useAuth();

	const handlePickDay = useCallback((weekDay: weekDayType) => {
		setSelectedDay(weekDay);
	}, [setSelectedDay]);

	const handlePickTicketType = useCallback((value: IValues) => {
		setSelectedType(value.titketType);
		setValue(value.value);
		console.log(value.image_url)
	}, [setSelectedType, setValue]);

	const handleBuyTicket = useCallback(async () => {
		try {
			const code = Math.random().toString(36).slice(2, 7);
			const newTicket: ITicket = {
				id: code,
				code, 
				chosen_day: selectedDay,
				currency: 'BRL',
				event_id: event.id,
				event_name: event.name,
				local: event.local,
				user_id: user.id,
				value,
				event_url: event.event_photo_url
			} 
			console.log()
			const response = await EventsService.buyEventTicket(newTicket);

			if (response) {
				navigate(PrivateEnum.CONGRATULATIONS, { code: response.data.code });
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível efetuar a compra do ingresso');
		}
	}, [navigate]);

		return (
			
			<Container visible={isVisible} transparent >
					<Content>
						<BackButton onPress={() => setIsVisible(false)} />
						<Scroll showsVerticalScrollIndicator={false} >
							<Title> Choose an available day</Title>
							<PickDaysSelectorContainer>
								{
									event.days_long.map(item => (
										<PickDaySelector
											key={item.week_day} 
											isSelected={item.week_day === selectedDay}
											title={item}
											onPress={() => handlePickDay(item.week_day)} 
										/>
									))
								}
							</PickDaysSelectorContainer>
							<TypeOfTicketContainer>
								{
									event.prices.map(item => (
										item.week_day === selectedDay &&
										item.values.map(it => (
											<TypeOfTicketCard
												key={it.titketType} 
												title={it.titketType}
												image_url={it.image_url}
												onPress={() => handlePickTicketType(it)} 
												selected={selectedType === it.titketType}
											/>
										))
									))
								}
							</TypeOfTicketContainer>
							<TotalContainer>
								<TotalContent>
									<TotalTitle>Total</TotalTitle>
									<TotalValue>RS {value},00</TotalValue>
								</TotalContent>
							</TotalContainer>
							<Button title='Buy Ticket' onPress={handleBuyTicket} type='success' />
						</Scroll>
					</Content>
			</Container>
		);
}

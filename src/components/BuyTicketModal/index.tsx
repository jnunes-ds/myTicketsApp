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
import { IEvent, IValues } from '~/models/event';

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
	const [selectedDay,setSelectedDay] = useState('');
	const [selectedType, setSelectedType] = useState('');
	const [value, setValue] = useState<number>(0);

	const handlePickDay = useCallback((weekDay: weekDayType) => {
		setSelectedDay(weekDay);
	}, [setSelectedDay]);

	const handlePickTicketType = useCallback((value: IValues) => {
		setSelectedType(value.titketType);
		setValue(value.value);
		console.log(value.image_url)
	}, [setSelectedType, setValue]);

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

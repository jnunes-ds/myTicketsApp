import React from 'react';
import { RadioButton } from '../RadioButton';
import { weekDayType } from '~/models/components/weekDays';

import {
		Container,
		Title
} from './styles'
import { GestureResponderEvent } from 'react-native';
import { IDaysLong } from '~/models/event';

interface Props{
	title: IDaysLong;
	isSelected?: boolean;
	onPress(weekDay: weekDayType): void;
}

export function PickDaySelector({ title, isSelected = false, onPress } : Props){

		return (
				<Container onPress={(event:GestureResponderEvent) => onPress(event as unknown as weekDayType)} >
					<RadioButton isActive={isSelected} />
					<Title>{title.week_day} - {title.duration.starts_at} - {title.duration.ends_at}</Title>
				</Container>
		);
}

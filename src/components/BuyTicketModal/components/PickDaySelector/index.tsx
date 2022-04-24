import React from 'react';
import { RadioButton } from '../RadioButton';
import { weekDayType } from '~/models/components/weekDays';

import {
		Container,
		Title
} from './styles'
import { GestureResponderEvent } from 'react-native';

interface Props{
	title: {
		dayName: string;
		weekDay: weekDayType;
		startsAt: string;
		endsAt: string;
	};
	isSelected?: boolean;
	onPress(weekDay: weekDayType): void;
}

export function PickDaySelector({ title, isSelected = false, onPress } : Props){

		return (
				<Container onPress={(event:GestureResponderEvent) => onPress(event as unknown as weekDayType)} >
					<RadioButton isActive={isSelected} />
					<Title>{title.dayName} - {title.startsAt} - {title.endsAt}</Title>
				</Container>
		);
}

import React from 'react';
import { IEvent } from '~/models/event';
import { DetailItem } from '../DetailItem';

import {
	DetailsContainer,
	DetailsTitle,
	DetailsContent,
} from './styles';

export interface DataProps {
	showTime: string;
	Address: string;
	genres: string[];
	value: number;
	description?: string;
};

export interface EventDetailsProps{
	data: IEvent;
}

export function EventDetails({ data } : EventDetailsProps){

		return (
			<DetailsContainer >
				<DetailsTitle>Details</DetailsTitle>
				<DetailsContent>
					<DetailItem 
						title='ShowTime'
						info={data.days_long[0].duration.starts_at}
					/>
					<DetailItem 
						title='Address'
						info={data.local.address}
					/>
					<DetailItem 
						title='genres'
						info={data.categories}
					/>
					<DetailItem 
						title='Value'
						info={`R$ ${data.prices[0].values[0].value},00`}
					/>
					{
						data.description &&
						<DetailItem 
							title='description'
							info={data.description}
						/>
					}
				</DetailsContent>
			</DetailsContainer>
		);
}

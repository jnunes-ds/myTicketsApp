import React from 'react';
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
	data: DataProps;
}

export function EventDetails({ data } : EventDetailsProps){

		return (
			<DetailsContainer >
				<DetailsTitle>Details</DetailsTitle>
				<DetailsContent>
					<DetailItem 
						title='ShowTime'
						info={data.showTime}
					/>
					<DetailItem 
						title='Address'
						info={data.Address}
					/>
					<DetailItem 
						title='genres'
						info={data.genres}
					/>
					<DetailItem 
						title='Value'
						info={`R$ ${data.value},00`}
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

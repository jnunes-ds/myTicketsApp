import React from 'react';

import {
	Container,
	Image,
	Title,
} from './styles';

interface Props{
		title: string;
		imageUrl: string
}


export function EventCard({ title, imageUrl }: Props){

		return (
				<Container>
						<Image 
							source={{
								uri: imageUrl
							}}
						>
							<Title> {title} </Title>
						</Image>
				</Container>
		);
}

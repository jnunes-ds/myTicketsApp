import React from 'react';

import {
	Container,
	Image,
	Title,
} from './styles';

interface Props{
	title: string;
	imageUrl: string;
	onPress(): void;
}


export function EventCard({ title, imageUrl, onPress }: Props){

		return (
				<Container onPress={onPress}>
					{
						imageUrl
						?	<Image 
								source={{
								uri: imageUrl
								}}
							>
								<Title> {title} </Title>
							</Image>
						: <Title> {title} </Title>
					}
				</Container>
		);
}

import React from 'react';

import {
	Container,
	Image,
	Title,
	Content
} from './styles';

interface Props{
	title: string;
	imageUrl: string;
	onPress(): void;
}


export function EventCard({ title, imageUrl, onPress }: Props){

		return (
				<Container onPress={onPress}>
						{/* @ts-ignore */}
						<Image 
							source={{
								uri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
							}}
							>
							<Content>
							<Title> {title} </Title>
					</Content>
						</Image>
				</Container>
		);
}

import React from 'react';

import {
		Container,
		Image,
		Title,
		ImageContent
} from './styles'

interface Props{
		title: string;
		imageUrl: string
}

export function CategoryButton({ title, imageUrl } : Props){

		return (
				<Container>
					<ImageContent>
						<Image source={{
							uri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
						}}/>
					</ImageContent>
						<Title> {title} </Title>
				</Container>
		);
}

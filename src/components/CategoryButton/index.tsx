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
							uri: imageUrl
						}}/>
					</ImageContent>
						<Title> {title} </Title>
				</Container>
		);
}

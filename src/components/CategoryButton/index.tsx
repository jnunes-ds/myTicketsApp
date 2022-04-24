import React from 'react';

import {
		Container,
		Image,
		Title
} from './styles'

interface Props{
		title: string;
		imageUri: string
}

export function CategoryButton({ title, imageUri } : Props){

		return (
				<Container>
					<Image source={{
						uri: imageUri
					}}/>
						<Title> {title} </Title>
				</Container>
		);
}

import React from 'react';

import {
		Container,
		Title,
		Image
} from './styles'

interface Props{
	title: string;
	selected: boolean;
	image_url?: string;
	onPress(name: string): void;
}

export function TypeOfTicketCard({ title, selected, image_url, onPress } : Props){

		return (
				<Container selected={selected} onPress={(event) => onPress(event as unknown as string)} >
					{
						image_url &&
						image_url !== ''
						// @ts-ignore
							? <Image
									source={{
										uri: image_url
									}}
								>
									<Title> {title} </Title>
								</Image>
							: <Title>{title}</Title>
					}
				</Container>
		);
}

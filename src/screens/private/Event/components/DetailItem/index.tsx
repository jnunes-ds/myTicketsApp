import React from 'react';

import {
		Container,
		Content,
		Title,
		Info
} from './styles'

interface Props{
		title: string;
		info: string;
}

export function DetailItem({ title, info } : Props){

		return (
				<Container>
					<Content>
						<Title> {title} </Title>
						<Info>{info}</Info>
					</Content>
				</Container>
		);
}

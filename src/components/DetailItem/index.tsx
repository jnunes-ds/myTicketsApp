import React from 'react';

import {
		Container,
		Content,
		Title,
		InfoContainer,
		Info
} from './styles'

interface Props{
		title: string;
		info: string | string[];
}

export function DetailItem({ title, info } : Props){

		return (
				<Container>
					<Content>
						<Title> {title} </Title>
						{
							Array.isArray(info)
								? <InfoContainer>
										{info.map(item => (
											<Info>{item}</Info>
										))}
									</InfoContainer>
								: <Info>{info}</Info>
						}
					</Content>
				</Container>
		);
}

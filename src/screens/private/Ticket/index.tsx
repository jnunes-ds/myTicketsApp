import React from 'react';
import { BackButton, Button, EventDetails, EventDetailsProps } from '~/components';

import {
	Container,
	Title,
	DetailsContainer,
	DetailsContent,
	DetailsTitle,
	CodeContainer,
	CodeTitle,
	Code,
	ButtonsContainer,
	Content
} from './styles';

export function Ticket(){
	const eventDetails: EventDetailsProps = {
		data: {
			showTime: '14:30',
			Address: 'Rua Alcobaça, 139, Resgate, Salvador, Bahia, Brasil, CEP: 41152-115.',
			genres: ['Show', 'Religious'],
			value: 150,
			description: 'Show do povo de santo contra intolerância religiosa.'
		}
	};
	const ticket ={
		code: 'fdsfgsrmikgmrs15648-gdfsgfr12189-gvmfdkso-1gvfsg1fesfersw96f1',
		event: eventDetails.data
	}

	return (
			<Container>
				<BackButton onPress={() => {}} />
				<Content showsVerticalScrollIndicator={false} >
					<DetailsContainer>
						<DetailsContent>
							<EventDetails
								data={ticket.event}
							/>
							</DetailsContent>
					</DetailsContainer>
					<CodeContainer onPress={() => {}} >
						<CodeTitle>Ticket Code</CodeTitle>
						<Code>{ticket.code}</Code>
					</CodeContainer>
					<ButtonsContainer>
						<Button 
							title='Copy code'
							onPress={() => {}}
							type="blue"
						/>
						<Button 
							title='Access QR Code'
							onPress={() => {}}
							type="success"
						/>
						<Button 
							title='Sharecode'
							onPress={() => {}}
							type="default"
						/>
					</ButtonsContainer>
				</Content>
			</Container>
	);
}

import React from 'react';
import { BackButton, Button, EventDetailsProps } from '~/components';
import QRCodeComponent from 'react-native-qrcode-svg';

import {
		Container,
		Title,
		CodeContainer,
		Code,
		CodeTitle,
		QRCodeContainer
} from './styles'

export function QRCode(){
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
					<CodeContainer onPress={() => {}} >
						<CodeTitle>Ticket Code</CodeTitle>
						<Code>{ticket.code}</Code>
					</CodeContainer>
					<QRCodeContainer>
						<QRCodeComponent 
							value={ticket.code}
							color="black"
							backgroundColor="white"
							logoSize={338}
							size={338}
							logoMargin={2}
							logoBorderRadius={15}
							logoBackgroundColor="yellow"
						/>
					</QRCodeContainer>
					<Button 
						title='OK'
						onPress={() => {}}
						type="success"
					/>
				</Container>
		);
}

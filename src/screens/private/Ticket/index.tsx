import React, { useCallback } from 'react';
import { BackButton, Button, EventDetails, EventDetailsProps } from '~/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';

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

interface Params {
	code: string;
}

export function Ticket(){
	const { navigate, goBack } = useNavigation();
	const route = useRoute();
	const { code } = route.params as Params;
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
		code,
		event: eventDetails.data
	}

	const handleOpenQRCode = useCallback(() => {
		navigate(PrivateEnum.QR_CODE, { code });
	}, [navigate]);

	return (
			<Container>
				<BackButton onPress={goBack} />
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
							onPress={handleOpenQRCode}
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

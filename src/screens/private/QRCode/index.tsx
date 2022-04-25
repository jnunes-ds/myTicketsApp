import React from 'react';
import { BackButton, Button, EventDetailsProps } from '~/components';
import QRCodeComponent from 'react-native-qrcode-svg';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
		Container,
		Title,
		CodeContainer,
		Code,
		CodeTitle,
		QRCodeContainer
} from './styles';
import { ITicket } from '~/models/ticket';

interface Params {
	code: ITicket;
}

export function QRCode(){
	const { goBack } = useNavigation();
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
		return (
				<Container>
					<BackButton onPress={goBack} />
					<CodeContainer onPress={() => {}} >
						<CodeTitle>Ticket Code</CodeTitle>
						<Code>{code}</Code>
					</CodeContainer>
					<QRCodeContainer>
						<QRCodeComponent 
							value={code}
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
						onPress={goBack}
						type="success"
					/>
				</Container>
		);
}

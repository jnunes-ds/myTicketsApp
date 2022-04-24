import React from 'react';
import { BackButton, TicketCard } from '~/components';
import { ITicket } from '~/models/ticket';

import {
		Container,
		Title,
		TicketCardListContainer,
		TicketCardLit,
		TicketCardSeparator
} from './styles';

export function MyTickets(){
	const ticketsList: ITicket[] = [
		{
			code: "136defs8gs1g2s3g1rs6g1r5s61g",
			event_id: "geiropghnjadongpgmrsapkgjnm",
			event_name: "Show dos menino bom",
			user_id: "fndkjsopfkoffmipewfme",
			chosen_day: "Sat",
			currency: "BRL",
			event_url: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg',
			value: 150,
			local: {
				address:"Av. Luís Viana Filho, 1590 - Itapuã, Salvador - BA, 41730-101",
				location: {
					latitude: -12.923677906750054,
					longitude: -38.36045476631343
				}
			}
		},
		{
			code: "136defs8gs1g2s3g1rs6g1r5s61g",
			event_id: "geiropghnjadongpgmrsapkgjnm",
			event_name: "Show dos menino bom",
			user_id: "fndkjsopfkoffmipewfme",
			chosen_day: "Sat",
			currency: "BRL",
			event_url: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg',
			value: 150,
			local: {
				address:"Av. Luís Viana Filho, 1590 - Itapuã, Salvador - BA, 41730-101",
				location: {
					latitude: -12.923677906750054,
					longitude: -38.36045476631343
				}
			}
		}
	];

		return (
				<Container>
					<BackButton onPress={() => {}} />
						<Title> My Tickets</Title>
						<TicketCardListContainer>
							<TicketCardLit
								data={ticketsList}
								renderItem={({item}) => (
									<>
										<TicketCard data={item as ITicket}  />
										<TicketCardSeparator/>
									</>
								)}
							/>
						</TicketCardListContainer>
				</Container>
		);
}

import React from 'react';
import { BackButton, SearchBar } from '~/components';

import {
	Container,
	Content,
	Message
} from './styles'


export function Search(){

		return (
				<Container>
					<BackButton onPress={() => {}} />
					<SearchBar />
					<Content>
						<Message>Start Searching</Message>
					</Content>
				</Container>
		);
}

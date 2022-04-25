import React from 'react';
import { BackButton, SearchBar } from '~/components';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	Content,
	Message
} from './styles'


export function Search(){
	const { goBack } = useNavigation();

		return (
				<Container>
					<BackButton onPress={goBack} />
					<SearchBar />
					<Content>
						<Message>Start Searching</Message>
					</Content>
				</Container>
		);
}

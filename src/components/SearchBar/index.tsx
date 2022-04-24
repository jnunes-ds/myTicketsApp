import React from 'react';
import { SearchButton } from '../SearchButton';

import {
		Container,
		Input
} from './styles';

export function SearchBar(){

		return (
				<Container>
					<SearchButton onPress={() => {}} />
					<Input />
				</Container>
		);
}

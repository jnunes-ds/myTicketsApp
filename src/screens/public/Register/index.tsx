import React from 'react';
import { BackButton } from '~/components';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

import {
		Container,
		Title,
		Content
} from './styles'
import { ThirdStep } from './ThirdStep';

interface Props{
		title: string;
}

export function Register(){

	return (
		<Container>
			<BackButton />
			<Title> Create Account </Title>
			<Content>
				{/* <FirstStep /> */}
				{/* <SecondStep /> */}
				<ThirdStep />
			</Content>
		</Container>
	);
}

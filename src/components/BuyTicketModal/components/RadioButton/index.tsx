import React from 'react';

import {
		Container,
		Bullet
} from './styles';

interface Props {
	isActive: boolean;
}

export function RadioButton({ isActive }: Props){

		return (
				<Container>
						<Bullet isActive={isActive} />
				</Container>
		);
}

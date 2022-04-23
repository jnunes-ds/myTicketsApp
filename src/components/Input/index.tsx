import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextInput } from 'react-native';

import {
		Container,
		Title,
		ContentInput
} from './styles'

interface Props{
	control: Control<FieldValues, any>
	title: string;
}

export function Input({ title, control } : Props){

		return (
				<Container>
						<Title> {title} </Title>
						<Controller
							control={control}
							render={({field: { onChange, onBlur, value }}) => (
								<ContentInput
									placeholder={title}
									onBlur={onBlur}
									onChangeText={value => onChange(value)}
									value={value}
							/>)}
							name="email"
							rules={{ required: true }}
						/>
				</Container>
		);
}

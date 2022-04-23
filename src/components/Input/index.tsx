import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';

import {
		Container,
		Title,
		ContentInput,
		TextError
} from './styles'

interface Props extends TextInputProps{
	control: Control<FieldValues, any>
	title: string;
	name: string;
	required?: boolean;
	isPasswordInput?: boolean;
	error: string;
}

export function Input({ 
	name,
	 title,
	 control,
	 required = false,
	 isPasswordInput,
	 error,
	 ...rest
} : Props){

	return (
		<Container>
			<Title> {title} </Title>
			<Controller
				control={control}
				render={({field: { onChange, onBlur, value }}) => (
					// @ts-ignore
					<ContentInput
						placeholder={title}
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						value={value}
						secureTextEntry={isPasswordInput}
						{...rest} 
				/>)}
				name={name}
				rules={{ required }}
			/>
			{
				error &&
				<TextError>{ error }</TextError>
			}
		</Container>
	);
}

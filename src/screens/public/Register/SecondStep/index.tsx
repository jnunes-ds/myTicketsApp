import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button, Input as MyInput } from '~/components';
import { ISignInProps } from '~/models/signin';

import {
		Container,
		Title,
		Content,
		SmallTexts,
		Footer
} from './styles'

export function SecondStep(){
	const {
		register,
		setValue,
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm();

	function onSubmit(formData: ISignInProps) {
		console.log(formData.login);
	}

	return (
		<Container>
			<Content>
				<MyInput
					title='Name' 
					control={control}
					name='name'
					// error="Erro"
				/>
				<MyInput
					title='CPF' 
					control={control}
					name='cpf'
					keyboardType='number-pad'
					// error="Erro"
				/>
				<Button 
					title='Next'
					type='default'
					onPress={() => {}}
				/>
				<Footer>
					<SmallTexts>
						Already have an account?
					</SmallTexts>
					<TouchableWithoutFeedback
						onPress={() => {}}
					>
						<SmallTexts
							havUnderlinde
						>
						{''}Log In
					</SmallTexts>
					</TouchableWithoutFeedback>
				</Footer>
			</Content>
		</Container>
	);
}

import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button, Input } from '~/components';
import { ISignInProps } from '~/models/signin';

import {
		Container,
		Title,
		Content,
		SmallTexts,
		Footer
} from './styles'

export function ThirdStep(){
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
			<Content
				showsVerticalScrollIndicator={false}
			>
				<Input
					title='Bank' 
					control={control}
					name='bank'
					// error="Erro"
				/>
				<Input
					title='Card Number' 
					control={control}
					name='card_number'
					keyboardType='number-pad'
					// error="Erro"
				/>
				<Input
					title='Agency' 
					control={control}
					name='agency'
					keyboardType='number-pad'
					// error="Erro"
				/>
				<Input
					title='Account' 
					control={control}
					name='account'
					keyboardType='number-pad'
					// error="Erro"
				/>
				<Input
					title='Digit' 
					control={control}
					name='digit'
					keyboardType='number-pad'
					maxLength={1}
					// error="Erro"
				/>
				<Input
					title='Validity' 
					control={control}
					name='validity'
					keyboardType='default'
					// error="Erro"
				/>
				<Input
					title='Security Account' 
					control={control}
					name='digit'
					keyboardType='number-pad'
					maxLength={1}
					// error="Erro"
				/>
				<Button 
					title='Create Account'
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

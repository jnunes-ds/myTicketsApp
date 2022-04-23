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

export function LogIn(){
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
			<Title testID='title'>LogIn</Title>
			<Content>
				<MyInput
					title='Email or username' 
					control={control}
					name='login'
					keyboardType='email-address'
					autoComplete='email'
					// error="Erro"
				/>
				<MyInput 
					title='password'
					control={control}
					name='Password'
					isPasswordInput
					// error="Erro"
				/>
				<SmallTexts
					havUnderlinde
				>
					Forgot Password?
				</SmallTexts>
				<Button 
					title='Log In'
					type='default'
					onPress={handleSubmit(onSubmit)}
				/>
				<Footer>
					<SmallTexts>
						Don’t have an account?
					</SmallTexts>
					<TouchableWithoutFeedback
						onPress={() => {}}
					>
						<SmallTexts
							havUnderlinde
						>
						{' '}Create Account
					</SmallTexts>
					</TouchableWithoutFeedback>
				</Footer>
			</Content>
		</Container>
	);
}

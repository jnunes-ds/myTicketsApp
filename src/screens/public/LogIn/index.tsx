import React, { useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BackButton, Button, Input as MyInput } from '~/components';
import { ISignInProps } from '~/models/signin';
import { PublicEnum } from '~/routes/public.routes.enum';

import {
		Container,
		Title,
		Content,
		SmallTexts,
		Footer
} from './styles'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '~/hooks/Auth';
import api from '~/services/api';

export function LogIn(){
	const { logIn } = useAuth();
	const { navigate } = useNavigation();
	const {
		register,
		setValue,
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm();

	const onSubmit = useCallback( async (formData: ISignInProps) => {
		console.log(':::::FORM DATA:::::');
		console.log(formData);
		await logIn({email: formData.email, password: formData.password});
		
	}, [logIn]);

	const handleGoToRegisterScreen = useCallback(() => {
		navigate(PublicEnum.REGISTER);
	}, [navigate]);

	return (
		<Container>
			<Title testID='title'>LogIn</Title>
			<Content>
				<MyInput
					title='Email or username' 
					control={control}
					name='email'
					keyboardType='email-address'
					autoComplete='email'
					error="Erro"
				/>
				<MyInput 
					title='password'
					control={control}
					name='password'
					isPasswordInput
					error="Erro"
				/>
				<Button 
					title='Log In'
					type='default'
					onPress={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
				/>
				<Footer>
					<SmallTexts>
						Don’t have an account?
					</SmallTexts>
					<TouchableWithoutFeedback
						onPress={handleGoToRegisterScreen}
					>
						<SmallTexts
							havUnderlinde
						>
						{''}Create Account
					</SmallTexts>
					</TouchableWithoutFeedback>
				</Footer>
			</Content>
		</Container>
	);
}

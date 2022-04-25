import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Control, useForm } from 'react-hook-form';
import { Button, Input as MyInput } from '~/components';
import { ISignInProps } from '~/models/signin';

import {
		Container,
		Title,
		Content,
		SmallTexts,
		Footer
} from './styles';

interface Props {
	control: Control;
	onNextStep(): void;
}

export function FirstStep({ control, onNextStep }: Props){
	

	return (
		<Container>
			<Content>
				<MyInput
					title='Email' 
					control={control}
					name='email'
					keyboardType='email-address'
					autoComplete='email'
					error="Erro"
				/>
				<SmallTexts>
					We need your email for membership transactions. We{'\n'}
					will definitely not send mail about marketing.
				</SmallTexts>
				<MyInput
					title='Username' 
					control={control}
					name='username'
					error="Erro"
				/>
				<MyInput
					title='Email' 
					control={control}
					name='email'
					keyboardType='email-address'
					autoComplete='email'
					error="Erro"
				/>
				<MyInput
					title='Password' 
					control={control}
					name='password'
					keyboardType='visible-password'
					autoComplete='password'
					isPasswordInput
					error="Erro"
				/>
				<Button 
					title='Next'
					type='default'
					onPress={onNextStep}
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
						{' '}Log In
					</SmallTexts>
					</TouchableWithoutFeedback>
				</Footer>
			</Content>
		</Container>
	);
}

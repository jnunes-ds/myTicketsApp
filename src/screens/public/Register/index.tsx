import React, { useCallback, useState } from 'react';
import { BackButton } from '~/components';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

import {
		Container,
		Title,
		Content
} from './styles'
import { ThirdStep } from './ThirdStep';
import { useNavigation } from '@react-navigation/native';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ISignInProps } from '~/models/signin';

export type CurrentScreenType = 'first-step' | 'second-step' |'third-step';

export function Register(){
	const [currentScreen, setCurrentScreen] = useState<CurrentScreenType>('first-step');
	const { goBack } = useNavigation();
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

	const handleGoBack = useCallback(() => {
		switch (currentScreen) {
			case 'first-step': return goBack();
			case 'second-step': return setCurrentScreen('first-step');
			case 'third-step': return setCurrentScreen('second-step');
			default: return goBack();
		}
	}, [goBack, currentScreen, setCurrentScreen]);

	return (
		<Container>
			<BackButton onPress={handleGoBack} />
			<Title> Create Account </Title>
			<Content>
				{
					currentScreen === 'first-step' &&
					<FirstStep 
						control={control} 
						onNextStep={() => setCurrentScreen('second-step')} 
					/>
				}
				{
					currentScreen === 'second-step' &&
					<SecondStep 
						control={control}
						onNextStep={() => setCurrentScreen('third-step')}
					/>
				}
				{
					currentScreen === 'third-step' &&
					<ThirdStep 
						control={control}
						onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
					/>
				}
			</Content>
		</Container>
	);
}

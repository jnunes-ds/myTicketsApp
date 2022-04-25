import React from 'react';
import { BackButton, Button, Input } from '~/components';
import { useForm } from 'react-hook-form';
import { Svg, G, Path, Defs } from 'react-native-svg';

import {
		Container,
		Title,
		Content,
		ProfilePhotoContianer,
		ProfilePhotoTitle,
		ProfilePhotoSubContainer,
		ProfilePhotoContent,
		ProfilePhoto,
		ProfilePhotoIconContainer
} from './styles';

interface FormProps {
	name: string;
	username: string;
}

export function Profile(){
	const {
		control
	} = useForm();

	function onSubmit(formData: FormProps) {
		console.log(formData)
	}

		return (
				<Container>
					<BackButton onPress={() => {}} />
					<Title> Profile </Title>
					<ProfilePhotoContianer>
						<ProfilePhotoTitle>
							Profile photo
						</ProfilePhotoTitle>
						<ProfilePhotoSubContainer>
							<ProfilePhotoContent>
								<ProfilePhoto
									source={{
										uri: 'https://avatars.githubusercontent.com/u/68449430?v=4'
									}}
								>
									<ProfilePhotoIconContainer>
										<Svg width="26" height="21" viewBox="0 0 26 21" fill="none">
											<Path d="M3.75098 20.8071H22.2388C24.5151 20.8071 25.7354 19.5869 25.7354 17.3311V6.5542C25.7354 4.29834 24.5151 3.07812 22.2388 3.07812H19.542C18.7524 3.07812 18.4756 2.95508 17.9526 2.43213L17.1426 1.60156C16.5889 1.0376 16.0454 0.770996 15.0098 0.770996H10.939C9.90332 0.770996 9.35986 1.0376 8.80615 1.60156L7.99609 2.43213C7.47314 2.95508 7.19629 3.07812 6.40674 3.07812H3.75098C1.47461 3.07812 0.254395 4.29834 0.254395 6.5542V17.3311C0.254395 19.5869 1.47461 20.8071 3.75098 20.8071ZM3.96631 18.459C3.08447 18.459 2.60254 18.0078 2.60254 17.0747V6.81055C2.60254 5.87744 3.08447 5.42627 3.96631 5.42627H7.14502C8.06787 5.42627 8.51904 5.27246 9.04199 4.7085L9.80078 3.88818C10.375 3.2832 10.6929 3.11914 11.585 3.11914H14.3638C15.2559 3.11914 15.5737 3.2832 16.1274 3.87793L16.9067 4.7085C17.4297 5.27246 17.8809 5.42627 18.8037 5.42627H22.0234C22.9053 5.42627 23.3975 5.87744 23.3975 6.81055V17.0747C23.3975 18.0078 22.9053 18.459 22.0234 18.459H3.96631ZM13 17.1978C16.0352 17.1978 18.4756 14.7573 18.4756 11.7017C18.4756 8.646 16.0454 6.20557 13 6.20557C9.95459 6.20557 7.51416 8.646 7.51416 11.7017C7.51416 14.7573 9.95459 17.1978 13 17.1978ZM18.7729 8.11279C18.7729 8.88184 19.3984 9.48682 20.1572 9.47656C20.9058 9.47656 21.5312 8.87158 21.5312 8.11279C21.5312 7.37451 20.8955 6.73877 20.1572 6.73877C19.3984 6.73877 18.7729 7.37451 18.7729 8.11279ZM13 15.106C11.1235 15.106 9.5957 13.5884 9.5957 11.7017C9.5957 9.81494 11.1133 8.29736 13 8.29736C14.8765 8.29736 16.394 9.81494 16.394 11.7017C16.394 13.5884 14.8765 15.106 13 15.106Z" fill="white"/>
										</Svg>
									</ProfilePhotoIconContainer>
								</ProfilePhoto>
							</ProfilePhotoContent>
						</ProfilePhotoSubContainer>
					</ProfilePhotoContianer>
					<Content>
						<Input
							control={control} 
							title='Name'
							name='name'
						/>
						<Input 
							control={control}
							title='Username'
							name='username'
						/>
						<Button 
							onPress={() => {}}
							title="Save"
							type='default'
						/>
					</Content>
				</Container>
		);
}

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import {Container, Title} from './styles';
import { useThemeHook } from '~/hooks/Theme';

interface Props {
  title: string;
}

export function Home() {
	const { setTheme } = useThemeHook();

	useEffect(() => {
		setTheme('dark');
	}, []);

  return (
    <Container>
      <Title style={sheet.text}> Hello World </Title>
    </Container>
  );
}

const sheet = StyleSheet.create({
	text: {
		fontFamily: 'Roboto-Bold'
	}
});

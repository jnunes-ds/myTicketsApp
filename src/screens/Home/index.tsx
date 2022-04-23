import React from 'react';
import { StyleSheet } from 'react-native';

import {Container, Title} from './styles';

interface Props {
  title: string;
}

export function Home() {
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

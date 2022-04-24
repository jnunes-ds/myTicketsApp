import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import {
	Container, 
	Title,
	CategoriesListContainer,
	CategoriesListTitle,
	CategoriesList,
} from './styles';
import { useThemeHook } from '~/hooks/Theme';

interface Props {
  title: string;
}

export function Home() {
	const { setTheme } = useThemeHook();

	useEffect(() => {
		setTheme('light');
	}, []);

  return (
    <Container>
			<Title>Events</Title>
			<CategoriesListContainer>
				<CategoriesListTitle>Categories</CategoriesListTitle>
				<CategoriesList />
			</CategoriesListContainer>
    </Container>
  );
}


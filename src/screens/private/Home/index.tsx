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
import { CategoryButton } from '../../../components/CategoryButton/index';
import { EventCard } from '../../../components/EventCard/index';

interface Props {
  title: string;
}

interface List {
	id: number;
	name: string;
	imageUri: string;
}

export function Home() {
	const { setTheme } = useThemeHook();

	const list: List[] = [
		{
			id: 1,
			name: 'show',
			imageUri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
		},
		{
			id: 2,
			name: 'religious',
			imageUri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
		},
		{
			id: 1,
			name: 'charity',
			imageUri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
		},
		{
			id: 1,
			name: 'music',
			imageUri: 'https://assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg'
		},
	]

	useEffect(() => {
		setTheme('light');
	}, []);

  return (
    <Container>
			<Title>Events</Title>
			<CategoriesListContainer>
				<CategoriesListTitle>Categories</CategoriesListTitle>
				<CategoriesList
					data={list}
					renderItem={({ item, index }) => (
						<CategoryButton
							key={item.id}
							imageUrl={item.imageUri}
							title={item.name} 
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</CategoriesListContainer>
				{
					list.map(ITEM => (
						<CategoriesListContainer>
							<CategoriesListTitle>Categories</CategoriesListTitle>
							<CategoriesList
								data={list}
								renderItem={({ item, index }) => {
									if (item.name === ITEM.name) {
										return (
											<EventCard
												key={item.id}
												imageUrl={item.imageUri}
												title={item.name} 
											/>
										);
									}
								}}
								horizontal
								showsHorizontalScrollIndicator={false}
							/>
						</CategoriesListContainer>
					))
				}
    </Container>
  );
}


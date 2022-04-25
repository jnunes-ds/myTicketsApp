import React, { useEffect } from 'react';
// @ts-ignore
import Feather from 'react-native-vector-icons/dist/Feather';

import {
	Container,
	Header,
	Content, 
	Title,
	CategoriesListContainer,
	CategoriesListTitle,
	CategoriesList,
} from './styles';
import { useThemeHook } from '~/hooks/Theme';
import { CategoryButton } from '../../../components/CategoryButton/index';
import { EventCard } from '../../../components/EventCard/index';
import { SearchButton, MenuButton } from '~/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string;
}

interface List {
	id: number;
	name: string;
	imageUri: string;
}

interface RenderItemProps {
	item: List;
	index: number;
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
			<Header>
				<MenuButton onPress={() => {}} />
				<TouchableOpacity onPress={() => {}}>
					<Feather name="search" size={25} />
				</TouchableOpacity>
			</Header>
			<Content 
				showsVerticalScrollIndicator={false}
			>
				<Title>Events</Title>
				<CategoriesListContainer>
					<CategoriesListTitle>Categories</CategoriesListTitle>
					<CategoriesList
						data={list}
						renderItem={({ item, index }) => {
							const Item: List = item as unknown as List;
							return (
							<CategoryButton
								key={Item.id}
								imageUrl={Item.imageUri}
								title={Item.name} 
							/>
						)}}
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
									// @ts-ignore
									renderItem={({ item }: { item:List }) => {
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
			</Content>
    </Container>
  );
}


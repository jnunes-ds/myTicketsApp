import React, { useCallback, useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { PrivateEnum } from '~/routes/private.enum';
import { IEvent } from '~/models/event';
import EventsService from '../../../services/Events';
import { Alert, View } from 'react-native';
import { CategoriesType } from '~/models/components/categories';

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
	const [loading, setLoading] = useState<boolean>(true);
	const [categories, setCategories] = useState<CategoriesType[]>([]);
	const [events, setEvents] = useState<Array<IEvent>>([]);
	const [currendUsedCategories, setCurrentUserCategories] = useState<CategoriesType[]>([]);
	const { navigate } = useNavigation();
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
		getBackEndInformation();
	}, []);

	useEffect(() => {
		const tempCurrentUsedEvents: Set<CategoriesType> = new Set([]);
		if (categories.length && categories.length) {
			events.forEach(item => {
				item.categories.forEach(i => {
					tempCurrentUsedEvents.add(i)
				})
			});
			const tempCurrentUsedEventsArray = new Array(...tempCurrentUsedEvents);
			console.log('TEMP CURRENT CATEGORIES ARRAY', tempCurrentUsedEventsArray);
			setCurrentUserCategories(tempCurrentUsedEventsArray);
		}
	}, [events, categories]);

	useEffect(() => {
		console.log(':::::EVENTS:::::', events);
		if(currendUsedCategories.length && events.length) {
			setLoading(false);
		}
	}, [currendUsedCategories, categories]);

	const getEvents = async () => {
		try {
			const response = await EventsService.getEvents();
			if (response) {
				console.log(':::::RESPONSE > DATA:::::', response.data);
				setEvents(response.data);
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível pegar os eventos, verifique a sua conexão');
		}
	}

	const getCategories= async () => {
		try {
			const response = await EventsService.getCategories();
			if (response) {
				setCategories(response.data);
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Houve uma falha ao tentar buscar as categorias');
		}
	}

	const getBackEndInformation = async () => {
		Promise.all([getEvents(), getCategories()]);
	}

	const handleOpenEvent = useCallback((id: string) => {
		navigate(PrivateEnum.EVENT, { id })
	}, [navigate]);

	if (loading) {
		return <View />
	}

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
						data={categories}
						// @ts-ignore
						renderItem={({ item, index }:{item: CategoriesType, index: number}) => {
							return (
							<CategoryButton
								key={item}
								imageUrl={''}
								title={item}
							/>
						)}}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</CategoriesListContainer>
					{
						currendUsedCategories.map(ITEM => (
							<CategoriesListContainer>
								<CategoriesListTitle>{ITEM}</CategoriesListTitle>
								<CategoriesList
									data={events}
									// @ts-ignore
									renderItem={({ item }: { item:IEvent }) => {
										if (
											item &&
											item.categories &&
											item.categories.includes(ITEM as unknown as CategoriesType)
										) {
											return (
												<EventCard
													key={item.id}
													imageUrl={item.event_photo_url!}
													title={item.name}
													onPress={() => handleOpenEvent(item.id as unknown as string)}
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


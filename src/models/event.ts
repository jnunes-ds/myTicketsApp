import { currencysType } from "./components/currency";
import { CategoriesType } from "./components/categories";
import { ILocal } from "./components/local";
import { TitketType } from "./components/ticketType";
import { weekDayType } from "./components/weekDays";

type N = `${number}${number}`;
type houtType = `${N}:${N}`;

interface IDuration {
	starts_at: houtType;
	ends_at: houtType;
}

export interface IDaysLong {
	week_day: weekDayType;
	date: Date;
	duration: IDuration;
}

interface IPrice {
	week_day: weekDayType;
	currency: currencysType;
	values: IValues[];
}

export interface IValues {
	value: number;
	titketType: TitketType;
	image_url: string;
}

export interface IEvent {
	id: string;
	name: string;
	company_id: string;
	company_name: string;
	description?: string;
	event_photo_url?: string;
	local: ILocal;
	days_long: IDaysLong[];
	prices: IPrice[];
	categories: CategoriesType[];
};

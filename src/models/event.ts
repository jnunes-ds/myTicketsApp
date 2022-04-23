import { ILocal } from "./components/local";

type weekDayType =
	'Mon'
	| 'Tue'
	| 'Wed'
	| 'Thu'
	| 'Fri'
	| 'Sat'
	| 'Sun';

type N = `${number}${number}`;
type houtType = `${N}:${N}`;

interface IDuration {
	starts_at: houtType;
	ends_at: houtType;
}

interface IDaysLong {
	week_day: weekDayType;
	date: Date;
	duration: IDuration;
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
};

import { CategoriesType } from "./components/categories";
import { weekDayType } from "./components/weekDays";
import { IEvent } from "./event";
import { ILocal } from './components/local';
import { currencysType } from "./components/currency";

export interface ITicket {
	id: string;
	code: string;
	event_id: string;
	event_name:string;
	user_id: string;
	event_url?: string;
	chosen_day: weekDayType;
	local: ILocal;
	currency: currencysType;
	value: number;
}

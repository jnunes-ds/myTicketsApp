import { CategoriesType } from "~/models/components/categories";
import { IEvent } from "~/models/event";
import api from "./api";
import { ITicket } from '~/models/ticket';
import { AxiosResponse } from "axios";

interface IEventServiceResponse extends Omit<AxiosResponse, 'data'>{
	data: IEvent[];
}
interface ITicketResponse extends Omit<AxiosResponse, 'data'> {
	data: ITicket;
}

interface ICategoriesResponse extends Omit<AxiosResponse, 'data'> {
	data: CategoriesType[];
}

interface IEventsService {
	getEvents(): Promise<IEventServiceResponse>;
	getTicketsByUserId(userId: string): Promise<ITicket>;
	buyEventTicket(ticket: ITicket): Promise<ITicket>;
	getCategories(): Promise<ICategoriesResponse>;
}

class EventsService implements IEventsService {
	// DECLARING METHODS
	getEvents(): Promise<IEventServiceResponse> {
		throw new Error("Method not implemented.");
	}
	getTicketsByUserId(userId: string): Promise<ITicket> {
		throw new Error("Method not implemented.");
	}
	buyEventTicket(ticket: ITicket): Promise<ITicket> {
		throw new Error("Method not implemented.");
	}
	getCategories(): Promise<ICategoriesResponse> {
		throw new Error("Method not implemented.");
	}

	// IMPLEMENTING METHODS
	public static async getEvents(): Promise<IEventServiceResponse> {
		console.log('eita');
		return await api.get('/events');
	}

	public static async getTicketsByUserId(userId: string): Promise<ITicketResponse> {
		return await api.get(`/tickets?user_id${userId}`);
	}

	public static async buyEventTicket(ticket: ITicket): Promise<ITicketResponse> {
		return await api.post('/tickets', { ticket });
	}

	
	public static async getCategories(): Promise<ICategoriesResponse> {
		return await api.get('/categories');
	}
}

export default EventsService;

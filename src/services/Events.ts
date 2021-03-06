import { CategoriesType } from "~/models/components/categories";
import { IEvent } from "~/models/event";
import api from "./api";
import { ITicket } from '~/models/ticket';
import { AxiosResponse } from "axios";

interface IEventsServiceResponse extends Omit<AxiosResponse, 'data'>{
	data: IEvent[];
}
interface IEventServiceResponse extends Omit<AxiosResponse, 'data'>{
	data: IEvent;
}
interface ITicketsResponse extends Omit<AxiosResponse, 'data'> {
	data: ITicket[];
}

interface ITicketResponse extends Omit<AxiosResponse, 'data'> {
	data: ITicket;
}
interface ICategoriesResponse extends Omit<AxiosResponse, 'data'> {
	data: CategoriesType[];
}

interface IEventsService {
	getEvents(): Promise<IEventsServiceResponse>;
	getTicketsByUserId(userId: string): Promise<ITicketsResponse>;
	buyEventTicket(ticket: ITicket): Promise<ITicketResponse>;
	getCategories(): Promise<ICategoriesResponse>;
	getEventById(eventId: string): Promise<IEventServiceResponse>;
	getTicketById(ticketId: string): Promise<ITicketResponse>;
}

class EventsService implements IEventsService {
	// DECLARING METHODS
	getEvents(): Promise<IEventsServiceResponse> {
		throw new Error("Method not implemented.");
	}
	getEventById(eventId: string): Promise<IEventServiceResponse> {
		throw new Error("Method not implemented.");
	}
	getTicketsByUserId(userId: string): Promise<ITicketsResponse> {
		throw new Error("Method not implemented.");
	}
	buyEventTicket(ticket: ITicket): Promise<ITicketResponse> {
		throw new Error("Method not implemented.");
	}
	getCategories(): Promise<ICategoriesResponse> {
		throw new Error("Method not implemented.");
	}
	getTicketById(ticketId: string): Promise<ITicketResponse> {
		throw new Error("Method not implemented.");
	}

	// IMPLEMENTING METHODS
	public static async getEvents(): Promise<IEventsServiceResponse> {
		return await api.get('/events');
	}

	public static async getEventById(eventId: string): Promise<IEventServiceResponse> {
		return api.get(`/events/${eventId}`);
	}

	public static async getTicketsByUserId(userId: string): Promise<ITicketsResponse> {
		return await api.get(`/tickets?user_id${userId}`);
	}

	public static async buyEventTicket(ticket: ITicket): Promise<ITicketResponse> {
		return await api.post('/tickets', ticket);
	}

	public static async getCategories(): Promise<ICategoriesResponse> {
		return await api.get('/categories');
	}

	public static async getTicketById(ticketId: string): Promise<ITicketResponse> {
		return await api.get(`/tickets/${ticketId}`);
	}
}

export default EventsService;

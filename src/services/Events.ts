import { GenresType } from "~/models/components/genres";
import { IEvent } from "~/models/event";
import api from "./api";
import { ITicket } from '~/models/ticket';

interface IEventsService {
	getEvents(): Promise<IEvent[]>;
	getTicketsByUserId(userId: string): Promise<ITicket>;
	buyEventTicket(ticket: ITicket): Promise<ITicket>;
}

class EventsService implements IEventsService {
	// @ts-ignore
	getEvents(): Promise<IEvent[]> {}
	public static async getEvents(): Promise<IEvent[]> {
		return await api.get('/events');
	}

	// @ts-ignore
	getTicketsByUserId(userId: string): Promise<ITicket> {}
	public static async getTicketsByUserId(userId: string): Promise<ITicket> {
		return await api.get(`/tickets?user_id${userId}`);
	}

	// @ts-ignore
	buyEventTicket(ticket: ITicket): Promise<ITicket> {}
	public static async buyEventTicket(ticket: ITicket): Promise<ITicket> {
		return await api.post('/tickets', { ticket });
	}
}

export default EventsService;

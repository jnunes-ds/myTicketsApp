import { IBank } from "./components/bank";

export interface IUser {
	id: string;
	name: string;
	email: string;
	username: string;
	cpf: string;
	bank: IBank;
};

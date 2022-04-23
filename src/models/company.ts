import { ILocal } from './components/local';

export interface ICompany {
	id: string;
	owner_name: string;
	owner_cpf: string;
	corporate_name: string;
	name: string;
	cnpj: string;
	profile_picture_url?: string;
	description?: string;
	local: ILocal;
	follower: string;
	instagram: string;
	website:string;
}

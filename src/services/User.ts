import { IUser } from "~/models/user";
import api from "./api";

interface IUserService {
	getUser(login: string, password: string): Promise<void>;
	updateUser(userId: string, user: IUser): Promise<void>;
}

class UserServices implements IUserService {
	async getUser(login: string, password: string): Promise<void> {};
	public static async getUser(login: string, password: string): Promise<void> {
		return await api.get(`/users?email${login}&password=${password}`);
	};
	
	async updateUser(userId: string, user: IUser): Promise<void> {
		return await api.put('/users', { user });
	};
};

export default UserServices;

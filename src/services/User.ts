import { IUser } from "~/models/user";
import api from "./api";

interface IUserService {
	getUser(login: string, password: string): Promise<IUser>;
	updateUser(userId: string, user: IUser): Promise<IUser>;
}

class UserServices implements IUserService {
	// @ts-ignore
	getUser(login: string, password: string): Promise<IUser> {};
	public static async getUser(login: string, password: string): Promise<IUser> {
		return await api.get(`/users?email${login}&password=${password}`);
	};
	
	// @ts-ignore
	async updateUser(userId: string, user: IUser): Promise<void> {};
	public static async updateUser(userId: string, user: IUser): Promise<void> {
		return await api.put(`/users/${userId}`, { user });
	};
};

export default UserServices;

import { IUser } from "~/models/user";
import api from "./api";

interface UserPromise {
	data: IUser[];
}
interface IUserService {
	getUser(email: string, password: string): Promise<UserPromise>;
	updateUser(userId: string, user: IUser): Promise<UserPromise>;
	registernewUser(user: IUser): Promise<UserPromise>;
}

class UserServices implements IUserService {
	// @ts-ignore
	getUser(email: string, password: string): Promise<UserPromise> {};
	public static async getUser(email: string, password: string): Promise<UserPromise> {
		const response = await api.get(`/users?email${email}&password=${password}`);
		return response;
	};
	
	// @ts-ignore
	updateUser(userId: string, user: IUser): Promise<UserPromise> {};
	public static async updateUser(userId: string, user: IUser): Promise<UserPromise> {
		return await api.put(`/users/${userId}`, { user });
	};

	// @ts-ignore
	registernewUser(user: IUser): Promise<UserPromise> {}
	public static async registernewUser(user: IUser): Promise<UserPromise> {
		return await api.post('/users', { user });
	}
};

export default UserServices;

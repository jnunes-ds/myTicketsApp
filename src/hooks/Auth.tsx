import React, { useContext, createContext, useState, ReactNode, useCallback } from 'react';
import { Alert } from 'react-native';
import { ISignInProps } from '~/models/signin';
import { IUser } from '~/models/user';
import UserServices from '~/services/User';

interface AuthContextData {
	user: IUser;
	logIn({ email, password }: ISignInProps): Promise<void>;
	logOff(): void;
	updateUser(newUser: IUser): Promise<void>;
	register(user: IUser): Promise<void>;
}

interface Props {
	children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: Props) {
	const [user, _setUser] = useState<IUser>({} as IUser);

	async function logIn({ email, password }: ISignInProps) {
		try {
			console.log('AQUI')
			const response = await UserServices.getUser(email, password);
			if (response) {
				console.log(response.data);
			}
			const [User] = response.data;
			_setUser(User);
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível efetuar o login');
		}
	};

	const logOff = useCallback(() => {
		_setUser({} as IUser);
	}, [_setUser]);

	const updateUser = useCallback( async (newUser: IUser) => {
		try {
			const response = await UserServices.updateUser(user.id, newUser);
			_setUser(response.data);
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível realizar a atualização do perfil.');
		}
	}, [user]);

	const register = useCallback( async (user: IUser) => {
		try {
			const response = await UserServices.registernewUser(user);
			console.log(response.data);
			const [User] = response.data;
			_setUser(User);
		} catch (error) {
			console.error(error);
			Alert.alert('Atenção', 'Não foi possível efetuar o cadastro');
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				logIn,
				logOff,
				updateUser,
				register
			}}
		>
			{ children }
		</AuthContext.Provider>
	);

};

function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	return context;
};

export { AuthProvider, useAuth };

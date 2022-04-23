export interface IBank {
	holderName: string;
	holderCpf: string;
	bankName: string;
	cardNumber: number;
	agency: number;
	account: number;
	digit: number;
	validity: string;
	securityNumber?: number;
};

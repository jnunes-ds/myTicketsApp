interface ILocation {
	latitude: number;
	longitude: number;
}

export interface ILocal {
	address: string;
	location: ILocation;
}

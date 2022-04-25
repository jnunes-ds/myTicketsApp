import React, { ReactNode } from 'react';
import { AuthProvider } from './Auth';

import { ThemeHookProvider } from './Theme';

interface Props {
	children: ReactNode;
};

function AppProvider({ children }: Props) {
	return (
		<ThemeHookProvider>
			<AuthProvider>
			{ children }
			</AuthProvider>
		</ThemeHookProvider>
	);
}

export { AppProvider };

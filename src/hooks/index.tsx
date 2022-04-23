import React, { ReactNode } from 'react';

import { ThemeHookProvider } from './Theme';

interface Props {
	children: ReactNode;
};

function AppProvider({ children }: Props) {
	return (
		<ThemeHookProvider>
			{ children }
		</ThemeHookProvider>
	);
}

export { AppProvider };

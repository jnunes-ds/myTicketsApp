const MonthsNamesList = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getMonthByNumber(monthNumber: number) {
	const monthIndex = monthNumber - 1;
	return MonthsNamesList[monthIndex];
}

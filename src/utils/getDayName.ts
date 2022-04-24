import { weekDayType } from '~/models/components/weekDays';


enum DaysName {
	Mon = 'Monday',
	Tue = 'Tuesday',
	Wed = 'Wednesday',
	Thu = 'Thusday',
	Fri = 'Friday',
	Sat = 'Saturday',
	Sun = 'Sunday'
}

export function getDayName(day: weekDayType) {
	return DaysName[`${day}`]
}

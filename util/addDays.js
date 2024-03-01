const addDays = (date, days) => {
	const copy = new Date(Number(date));
	copy.setDate(date.getDate() + days);
	return copy;
};

export default addDays;

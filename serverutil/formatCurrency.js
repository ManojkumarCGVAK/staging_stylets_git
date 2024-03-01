const formatCurrency = number => {
	return new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	}).format(number);
};

module.exports = formatCurrency;

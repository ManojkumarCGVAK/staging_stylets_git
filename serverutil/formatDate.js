const formatDate = date =>
	date
		.split('-')
		.reverse()
		.join('/');

module.exports = formatDate;

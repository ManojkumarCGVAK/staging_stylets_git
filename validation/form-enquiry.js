const Validator = require('validator');
const isEmpty = require('./is-empty');

 const validateFormEnquiry = data => {
	let errors = {};

	// turn data in to strings
	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.message = !isEmpty(data.message) ? data.message : '';

	if (data.company !== undefined) {
		data.company = !isEmpty(data.company) ? data.company : '';
	}

	// check if email is empty and valid
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	// check if name field is empty
	if (Validator.isEmpty(data.name)) {
		errors.name = 'Name field is required';
	}

	// check if company field is empty
	if (data.company !== undefined && Validator.isEmpty(data.company)) {
		errors.company = 'Company field is required';
	}

	// check if message field is empty
	if (Validator.isEmpty(data.message)) {
		errors.message = 'Message field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};

module.exports = validateFormEnquiry
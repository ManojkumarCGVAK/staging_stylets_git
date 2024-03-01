const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports =  function validateFormBooking(data){
	let errors = {};

	// turn data in to strings
	data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.addressLine1 = !isEmpty(data.addressLine1) ? data.addressLine1 : '';
	data.city = !isEmpty(data.city) ? data.city : '';
	data.postalCode = !isEmpty(data.postalCode) ? data.postalCode : '';
	data.name = !isEmpty(data.name) ? data.name : '';
	data.number = !isEmpty(data.number) ? data.number : '';
	data.expiry = !isEmpty(data.expiry) ? data.expiry : '';
	data.cvc = !isEmpty(data.cvc) ? data.cvc : '';

	// check if email is empty and valid
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	// check if name field is empty
	if (Validator.isEmpty(data.firstName)) {
		errors.firstName = 'First name is required';
	}

	if (Validator.isEmpty(data.lastName)) {
		errors.lastName = 'Last name is required';
	}

	// check if address details are present
	if (Validator.isEmpty(data.addressLine1)) {
		errors.addressLine1 = 'Address line 1 field is required';
	}

	if (Validator.isEmpty(data.city)) {
		errors.city = 'City field is required';
	}

	if (Validator.isEmpty(data.postalCode)) {
		errors.postalCode = 'Postcode field is required';
	}

	if (Validator.isEmpty(data.name)) {
		errors.name = 'Card name field is required';
	}

	// if (!Validator.isLength(data.number.toString(), { min: 16, max: 16 })) {
	// 	errors.number = 'Card number must be 16 digits long';
	// }

	if (Validator.isEmpty(data.number)) {
		errors.number = 'Card number field is required';
	}

	// if (!Validator.isLength(data.expiry.toString(), { min: 4, max: 4 })) {
	// 	errors.expiry = 'Card expiry must be 4 digits long';
	// }

	if (Validator.isEmpty(data.expiry)) {
		errors.expiry = 'Card expiry field is required';
	}

	// if (!Validator.isLength(data.cvc.toString(), { min: 3, max: 3 })) {
	// 	errors.cvc = 'CVC must be 3 digits long';
	// }

	if (Validator.isEmpty(data.cvc)) {
		errors.cvc = 'CVC field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};

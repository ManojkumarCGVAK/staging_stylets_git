const axios = require('axios');
const qs = require('qs');
const jwt_decode = require('jwt-decode');

const keys = require('../config/keys');
const setAuthToken = require("../serverutil/setAuthToken");

const authenticate = () => {
	if (axios.defaults.headers.common['Authorization']) {
		const decoded = jwt_decode(
			axios.defaults.headers.common['Authorization']
		);

		if (Date.now() < decoded.exp * 1000) {
			// console.log('JWT is still valid.');
			return { success: 'JWT is still valid' };
		} else {
			// console.log('JWT has expired.');
			setAuthToken();
		}
	}

	const data = {
		username: keys.RES_USER,
		password: keys.RES_PASS,
	};

	return axios
		.post(`${keys.API}/auth`, qs.stringify(data))
		.then(result => {
			const { apiToken } = result.data;
			if (apiToken) {
				setAuthToken(apiToken);
				return { success: 'JWT has been set.' };
			}
			return {
				error:
					'Something went wrong trying to authenticate your request...',
			};
		})
		.catch(err => console.log(err));
};

module.exports = authenticate;

const authenticate = require('../../../../serverutil/authenticate');

const keys = require('../../../../config/keys');
const axios = require('axios');


export default async function handler(req, res) {

  const { error } = await authenticate();
		if (error) {
			return res.status(400).json(error);
		}

		const { dateFrom, dateTo, grouping, propertyIdentifier } = req.query;

		return axios
			.get(`${keys.API}/availabilities`, {
				params: { dateFrom, dateTo, grouping, propertyIdentifier },
			})
			.then(response => {
				return res.json(response.data.results[0]);
			})
			.catch(err => {
				return res.status(400).json(err);
			});

}

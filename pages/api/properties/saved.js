const authenticate = require('../../../serverutil/authenticate');
const propertySort = require('../../../serverutil/propertySort')

const keys = require('../../../config/keys');
const axios = require('axios');


export default async function handler(req, res) {

    const { error } = await authenticate();
    if (error) {
        return res.status(400).json({ error, msg: 'There was an auth error' });
    }

    const { pageSize } = req.query;
    const storedProperties = Array.isArray(req.query['storedProperties[]'])? 
                                        (req.query['storedProperties[]']): 
                                        (req.query['storedProperties[]'] !== '' && req.query['storedProperties[]'] !== undefined)&& [req.query['storedProperties[]']];
   return axios
        .get(`${keys.API}/properties`, { params: { pageSize } })
        .then(response => {
            const properties = response.data.results;
            if (Array.isArray(storedProperties) && storedProperties.length) {
                const filteredProperties = properties.filter(property => storedProperties.includes(property.id));
                return res.json(filteredProperties);
            }
            return res.json(false);
        })
        .catch(err => res.status(400).json(err));

}

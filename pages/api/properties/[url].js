const authenticate = require('../../../serverutil/authenticate');
const propertySort = require('../../../serverutil/propertySort')

const keys = require('../../../config/keys');
const axios = require('axios');


export default async function handler(req, res) {
  const {url} = req.query;
  const { error } = await authenticate();
  if (error) {
    return res.status(400).json(error);
  }
  return axios
    .get(`${keys.API}/properties/${url}`)
    .then(response => {
    
      return res.json(response.data);
    }).catch(err => res.status(400).json(err));

}

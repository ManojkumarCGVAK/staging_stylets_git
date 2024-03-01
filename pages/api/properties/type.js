const authenticate = require('../../../serverutil/authenticate');
const propertySort = require('../../../serverutil/propertySort')

const keys = require('../../../config/keys');
const axios = require('axios');


export default async function handler(req, res) {

    const { error } = await authenticate();
    if (error) {
        return res.status(400).json(error);
    }

    const { dateFrom, dateTo, propertyType, propertyTypeName, location, promoCode } = req.query;

   return axios
        .get(`${keys.API}/availabilities`, {
            params: {
                dateFrom,
                dateTo,
                grouping: 'UNIT_TYPE',
                propertyType,
                promoCode,
            },
        })
        .then(response => {
            const result = response.data.results.find(
                property =>
                    property.propertyTypeName === propertyTypeName && property.areaName.toLowerCase() === location
            );

            return res.status(200).json(result);
        })
        .catch(err => console.log(err));

}

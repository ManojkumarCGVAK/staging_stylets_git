const authenticate = require('../../../../serverutil/authenticate');

const keys = require('../../../../config/keys');
const axios = require('axios');


export default async function handler(req, res) {

  const { error } = await authenticate();
  if (error) {
    return res.status(400).json(error);
  }

  const { dateFrom, dateTo, location, guests, promoCode, grouping } = req.query;

  if (location) {
    return axios
      .get(`${keys.API}/availabilities/area`, {
        params: {
          dateFrom,
          dateTo,
          areaIdentifier: Number(location),
          grouping,
          pageSize: 1000,
          promoCode,
        },
      })
      .then(response => {
        if (guests) {
          const filteredProperties = response.data.results.filter(
            property => property.maxOccupancy >= Number(guests)
          );
          return res.json(filteredProperties);
        }
        return res.json(response.data.results);
      })
      .catch(err => res.status(400).json(err));
  }

  return axios
    .get(`${keys.API}/availabilities`, {
      params: {
        dateFrom,
        dateTo,
        grouping,
        pageSize: 1000,
        promoCode,
      },
    })
    .then(response => {
      if (guests) {
        const filteredProperties = response.data.results.filter(
          property => property.maxOccupancy >= guests
        );
        return res.json(filteredProperties);
      }
      return res.json(response.data.results);
    })
    .catch(err => res.status(400).json(err));

}

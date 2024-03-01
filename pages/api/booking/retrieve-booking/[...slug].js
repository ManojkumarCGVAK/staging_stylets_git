const keys = require('../../../../config/keys');
const axios = require('axios');

export default async function handler(req, res) {

    const bookingIdentifier = req.params.bookingIdentifier;

    axios
        .get(`${keys.API}/bookings/${bookingIdentifier}`)
        .then(response => res.json({ bookingReference: response.data.bookingReference }))
        .catch(err => res.status(400).json(err));
}


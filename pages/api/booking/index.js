const keys = require('../../../config/keys');
const validateFormBooking = require('../../../validation/form-booking');
const Base64 = require('js-base64').Base64;
const axios = require('axios');


export default async function handler(req, res) {

    if(req.method === 'POST'){

    const { errors, isValid } = validateFormBooking(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const token = Base64.encode(`${keys.integrationKey}:${keys.integrationPassword}`);
    const postData = {
        vendorName: keys.vendorName,
    };
    const config = {
        headers: {
            Authorization: `Basic ${token}`,
        },
    };
    try{
        const response = await axios.post(`${keys.sageAPI}/merchant-session-keys`, postData, config)
        res.json(response.data)
    }catch(err){
        res.status(401).json(err)
    }
    
       
}else{
    return res.status(404).json({'Message':'not found'})
}
}

const keys = require('../../../config/keys');
const Base64 = require('js-base64').Base64;
const axios = require('axios');
const uuid4 = require('uuid4');

const authenticate = require('../../../serverutil/authenticate');

const waitForMe = async duration => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), duration);
    });
};

export default async function handler(req, res) {

    if(req.method === 'POST'){

        const { error } = await authenticate();
        if (error) {
            return res.status(400).json(error);
        }
    
        const {
            company,
            firstName,
            lastName,
            phone,
            email,
            addressLine1,
            addressLine2,
            city,
            postalCode,
            numberOfGuests,
            source,
            propertyId,
            rateId,
            dateFrom,
            dateTo,
            amount,
            promoCode,
            name,
            number,
            expiry,
            cvc,
            merchantSessionKey,
            cardIdentifier,
            timezone,
            url_location,
            availability,
            availability_name
        } = req.body;
        const vendorTxCode = uuid4();
        

        const bookingDetails = {
            contactDetails: {
                type: 'CONTACT',
                companyName: company,
                contactFirstName: firstName,
                contactLastName: lastName,
                email,
                telephone: phone,
                address: {
                    addressLine1,
                    addressLine2,
                    city,
                    postcode: postalCode,
                    country: 'United Kingdom',
                    isoCountry2: '',
                },
            },
            stayDetails: {
                propertyId,
                rateId,
                datePeriod: {
                    dateFrom,
                    dateTo,
                },
            },
            numberOfGuests: Number(numberOfGuests),
            reserveForMinutes: 0,
            promoCode,
        }
            
        // };
        
        const token = Base64.encode(`${keys.integrationKey}:${keys.integrationPassword}`);
    
        const config = {
            headers: {
                Authorization: `Basic ${token}`,
            },
        };
    

       function preParePayment(bookID){
        return {
            transactionType: 'Payment',
            paymentMethod: {
                card: {
                    merchantSessionKey,
                    cardIdentifier,
                    reusable: false,
                    save: false
                },
            },
            vendorTxCode,
            amount,
            currency: 'GBP',
            description: 'Short term let for a property',
            // settlementReferenceText,
            customerFirstName: firstName,
            customerLastName: lastName,
            billingAddress: {
                address1: addressLine1,
                address2: addressLine2,
                city,
                postalCode,
                country: 'GB',
            },
            entryMethod:"Ecommerce",
            giftAid: false,
            apply3DSecure:"Force",
            // apply3DSecure:"UseMSPSetting",
            // applyAvsCvcCheck: "UseMSPSetting",
            applyAvsCvcCheck: "Force",
            customerEmail: email,
            customerPhone: phone,
            shippingDetails: {
                recipientFirstName:firstName,
                recipientLastName: lastName,
                shippingAddress1: addressLine1,
                shippingAddress2: addressLine2,
                shippingAddress3: "",
                shippingCity: city,
                shippingPostalCode: postalCode,
                shippingCountry: "GB",
                },
            strongCustomerAuthentication: {
                website: process.env.SITE_URL,
                notificationURL: encodeURI(`${process.env.SITE_URL}/api/booking/auth-response/${bookID}?originUrl=${url_location}`),
                browserIP: req.headers['x-real-ip'] || req.connection.remoteAddress,
                browserAcceptHeader: "text/html, application/json",
                browserJavascriptEnabled: true,
                browserJavaEnabled: false,
                browserLanguage: "en-GB",
                browserColorDepth: "16",
                browserScreenHeight: "768",
                browserScreenWidth: "1200",
                browserTZ:timezone,
                browserUserAgent: req.headers['sec-ch-ua']??"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0",
                challengeWindowSize: "Small",
                transType:'GoodsAndServicePurchase',
                ThreeDSNotificationURL:encodeURI(`${process.env.SITE_URL}/api/booking/auth-response/${bookID}?originUrl=${url_location}`),
                threeDSReqPriorAuthMethod: "FrictionlessAuthentication",
                threeDSRequestorAuthenticationInfo:{
                    threeDSReqAuthData: "string",
                    threeDSReqAuthMethod: "NoThreeDSRequestorAuthentication",
                    // threeDSReqAuthTimestamp: "201810011445"
                },
                threeDSRequestorPriorAuthenticationInfo:{
                    // threeDSReqPriorAuthData: "data",
                    threeDSReqPriorAuthMethod: "FrictionlessAuthentication",
                    // threeDSReqPriorAuthTimestamp: "201901011645",
                    // threeDSReqPriorRef: "2cd842f5-da5d-40b7-8ae6-6ce61cc7b580"
                    },
                },
                
            }
       }
    
        
            
       
        axios
            .post(`${keys.API}/bookings`, bookingDetails)
            .then(response => {
                const { bookingIdentifier } = response.data;
                return bookingIdentifier
            }).catch(err => {throw err})
            .then(async bookingIdentifier=>{
                return await axios.post(`${keys.sageAPI}/transactions`, preParePayment(Base64.encode(bookingIdentifier)), config)
                .then(response=>{
                    
                    if (response.data.status === '3DAuth') {
                        return res.json({...response.data,
                            bookingIdentifier,
                            vendorTxCode,
                        })
                    }
                   ////////////////////
                   if (response.data.status === 'Ok') {
                    const paymentReference = response.data.transactionId;
                    const type = Object.keys(response.data.paymentMethod)[0];
                    const amount = Number(response.data.amount.totalAmount / 100);
                    const lastFour = response.data.paymentMethod[type].lastFourDigits;
                    let cardType = response.data.paymentMethod[type].cardType;

                    switch (cardType) {
                        case 'VisaCredit':
                            cardType = 'VISA_CREDIT';
                            break;
                        case 'VisaDebit':
                            cardType = 'VISA_DEBIT';
                            break;
                        case 'MasterCard':
                            cardType = 'MASTERCARD';
                            break;
                        case 'MasterCardDebit':
                            cardType = 'MASTERCARD_DEBIT';
                            break;
                        case 'Delta':
                            cardType = 'DELTA';
                            break;
                        case 'Maestro':
                            cardType = 'MAESTRO';
                            break;
                        case 'VisaElectron':
                            cardType = 'VISA_ELECTRON';
                            break;
                        case 'AmericanExpress':
                            cardType = 'AMERICAN_EXPRESS';
                            break;
                        case 'DinersClub':
                            cardType = 'DINERS_CLUB';
                            break;
                        default:
                            cardType = 'VISA_DEBIT';
                            break;
                    }

                    const bookingData = {
                        paymentReference,
                        type,
                        amount,
                        lastFour,
                        cardType,
                    };

                    return axios
                        .put(`${keys.API}/bookings/${bookingIdentifier}/status`, { status: 'PENDING' })
                        .then(response => {
                            // console.log('DEBUGGING---promoCode', bookingDetails.promoCode);
                            // console.log('DEBUGGING---amount', paymentDetails.amount);
                            if (response.status === 201) {
                                return axios
                                    .post(`${keys.API}/bookings/${bookingIdentifier}/payments`, bookingData)
                                    .then(response => {
                                        if (response.status === 201) {
                                            return axios
                                                .put(`${keys.API}/bookings/${bookingIdentifier}/status`, {
                                                    status: 'CONFIRMED',
                                                })
                                                .then(response => {
                                                    if (response.status === 201) {
                                                        return res.json({
                                                            success:
                                                                'Payment has been made & your booking is confirmed!',
                                                            vendorTxCode,
                                                            bookingIdentifier,
                                                        });
                                                    }
                                                })
                                                .catch(err => res.status(400).json(err));
                                        } else {
                                            return res.status(400).json({
                                                error: 'There was an error securing your booking',
                                            });
                                        }
                                    })
                                    .catch(err => res.status(400).json(err));
                            } else {
                                return res.status(400).json({
                                    error: 'There was an error securing your booking',
                                });
                            }
                        })
                        .catch(err => res.status(400).json(err));
                }

            //    if response is not 3d and not normal then this will throw
                return res.status(400).json({
                    [response.data.status]: response.data.statusDetail,
                });
                   ////////////////////
                })
            })
            .catch(err=>{
               
                if(err.response) {
                    res.status(422).json(err.response.data)
                }else{
                    res.status(400).json(err)
                } 
            })

    }else{
        res.status(404).json({'Message':'not found'})
    }
}

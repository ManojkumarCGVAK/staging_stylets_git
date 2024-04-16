const keys = require('../../../../config/keys');
const axios = require('axios');
var qs = require('qs');
const Base64 = require('js-base64').Base64;

const waitForMe = async duration => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), duration);
    });
};
export const config = {
    api: {
      bodyParser: {
        sizeLimit: '1mb',
      },
    },
  }

const TemplateRender = (errorData, originUrl)=>{
    let errorPrint = typeof errorData === "string"? errorData : JSON.stringify(errorData); 

    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <!-- <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> -->
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> -->
    
            <!-- Open Sans -->
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet" />
    
            <!-- Bootstrap -->
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
    
            <!-- Font Awesome -->
            <script src="https://kit.fontawesome.com/c8ec6b1d14.js"></script>
    
            <title>Error</title>
    
            <style>
                .container {
                    padding-top: 2rem;
                }
    
                .error-header {
                    text-align: center;
                }
                .error-header h4 {
                    border-bottom: 2px solid #ea5b0c;
                    display: inline-block;
                    text-transform: uppercase;
                }
    
                .btn.btn-secondary {
                    background-color: #ea5b0c;
                    color: #0c0a2d;
                    font-weight: 600;
                    font-size: 1.125rem;
                    border-radius: 0;
                    transition: all 0.3s ease;
                    border: 2px solid #ea5b0c;
                    padding: 10px 20px;
                }
                .btn.btn-secondary:hover {
                    color: #ea5b0c;
                    background-color: transparent;
                }
            </style>
        </head>
        <body>
            <div class="homepage booking-fail">
                <section class="inner-page">
                    <div class="container">
                        <div class="error-header">
                            <h4>Error</h4>
                            <p><strong>${errorPrint}</strong></p>
                            <p>Please return to the booking page by clicking the button below</p>
                            <a href="${originUrl}" class="btn btn-secondary">Return To Booking</a>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    </html>
    `
}

export default async function handler(req, res) {
    if(req.method === 'POST'){
    const {slug} = req.query;  
    const {originUrl,dateTo} = req.query;
    const [booking] = slug
    const {threeDSSessionData:transactionId,cres} = req.body; 
    if(!(cres && transactionId)) return res.status(400).json({"message":"please use valid detail"})   
        
    const data = {
        ...req.body,
        transactionId: transactionId,
        bookingIdentifier:  Base64.decode(booking),
        originUrl: encodeURI(`${originUrl}&dateTo=${dateTo}`),
    };

    const token = Base64.encode(`${keys.integrationKey}:${keys.integrationPassword}`);

    const config = {
        headers: {
            Authorization: `Basic ${token}`,
        },
    };

    const secureData = {
        cRes:cres,
    };

    axios
        .post(`${keys.sageAPI}/transactions/${transactionId}/3d-secure-challenge`, secureData, config)
        .then(async () => {
            await waitForMe(2000);

            axios
                .get(`${keys.sageAPI}/transactions/${transactionId}`, config)  
                .then(response => {
                    if (response.data.status === 'Ok') {
                        console.log(response.data);
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
                            .put(`${keys.API}/bookings/${data.bookingIdentifier}/status`, { status: 'PENDING' })
                            .then(response => {
                                if (response.status === 201) {
                                    return axios
                                        .post(
                                            `${keys.API}/bookings/${data.bookingIdentifier}/payments`,
                                            bookingData
                                        )
                                        .then(response => {
                                            if (response.status === 201) {
                                                return axios
                                                    .put(`${keys.API}/bookings/${data.bookingIdentifier}/status`, {
                                                        status: 'CONFIRMED',
                                                    })
                                                    .then(response => {
                                                        if (response.status === 201) {
                                                            axios
                                                                .get(
                                                                    `${keys.API}/bookings/${data.bookingIdentifier}`
                                                                )
                                                                .then(response => {
                                                                    return res.redirect(301,'/booking-success');
                                                                })
                                                                .catch(err => {
                                                                    console.log(err);
                                                                    return res.send(TemplateRender(err.response.data,data.originUrl))
                                                                });
                                                        }
                                                    })
                                                    .catch(err => {
                                                        return res.send(TemplateRender(err.response.data,data.originUrl))
                                                    });
                                            } else {
                                                return res.send(TemplateRender('There was an error securing your booking',data.originUrl))
                                            }
                                        })
                                        .catch(err => {
                                            return res.send(TemplateRender(err.response.data,data.originUrl))
                                        });
                                } else {
                                    return res.send(TemplateRender('There was an error securing your booking',data.originUrl))
                                }
                            })
                            .catch(err => {
                                return res.send(TemplateRender(err.response.data,data.originUrl))
                            });
                    }
                    return res.send(TemplateRender(response.data.statusDetail,data.originUrl))
                })
                .catch(err => {
                    console.log(err);
                    return res.send(TemplateRender(err.response.data,data.originUrl))
                });
        })
        .catch(err => {
            return res.send(TemplateRender(err.response.data,data.originUrl))
        });
    }
else{
    res.status(404).json({message:"not found"})
}
}